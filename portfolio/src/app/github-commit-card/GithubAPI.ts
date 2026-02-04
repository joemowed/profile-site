import moment from "moment";
export class GithubAPI {
    public gh_api_json: githubAPIJSON = {};
    readonly gh_api_base_url: string = "https://api.github.com";
    readonly user_events_url =
        this.gh_api_base_url + "/users/joemowed/events?per_page=10";
    readonly GH_API_MAX_RETRIES = 5;
    readonly gh_api_local_storage_key =
        "alkfjdlskjfadslkjflkasjflkhaoi3oien328y2089t2h3oisd";
    private commit_number: number = 0;
    private commit_local_storage_key =
        this.gh_api_local_storage_key + this.commit_number;
    private box_count: number = 0;

    private user_events_json: JSON[] = [];
    private user_events_fetch_pending: boolean = false;
    private user_events_retry_count: number = 0;

    private commit_json: any;
    private commit_fetch_pending: boolean = false;
    private commit_retry_count: number = 0;
    private repo_name: string = ""; //

    constructor(commit_number: number, box_count: number) {
        this.box_count = box_count;
        this.commit_number = commit_number;
        this.commit_local_storage_key =
            this.gh_api_local_storage_key + this.commit_number;
        this.fetchUserEvents();
    }

    public fetchUserEvents() {
        if (this.user_events_json.length != 0) {
            return;
        }
        if (this.user_events_retry_count >= this.GH_API_MAX_RETRIES) {
            //give up if at max retry count
            return;
        }
        if (!this.user_events_fetch_pending) {
            this.user_events_fetch_pending = true;
            fetch(this.user_events_url)
                .then((response) => {
                    response.json().then((data) => {
                        this.user_events_json = this.filterUserEvents(data);
                        if (!this.user_events_json) {
                            this.localLoadGHAPIJSON();
                        }
                        this.fetchCommit();
                        this.localStoreGHAPIJSON();
                    });
                })
                .catch((err) => {
                    console.error("github user events fetch error", err);
                    this.user_events_retry_count++;
                })
                .finally(() => {
                    this.user_events_fetch_pending = false;
                    return;
                });
        }
    }

    private filterUserEvents(data: any) {
        if ("length" in data) {
            return data.filter((element: any) => {
                return element.type == "PushEvent";
            });
        }
        return null;
    }

    private fetchCommit() {
        if (this.commit_retry_count >= this.GH_API_MAX_RETRIES) {
            return;
        }
        if (!this.user_events_json.at(this.commit_number)) {
            console.error(
                "user event JSON contains no events for this commit number",
            );
            return;
        }
        if (this.user_events_json.length <= this.commit_number) {
            console.error(
                `requested commmit ${this.commit_number}, user event JSON only contains ${this.user_events_json.length} PushEvents`,
            );
        }
        if (!this.commit_fetch_pending) {
            const commit_fetch_url = this.generateCommitFetchURL(
                this.user_events_json.at(this.commit_number),
                0,
            );
            this.commit_fetch_pending = true;
            fetch(commit_fetch_url)
                .then((response) => {
                    response.json().then((data) => {
                        if ("stats" in data) {
                            this.commit_json = data;
                        } else {
                            this.localLoadCommitJSON();
                        }
                        this.gh_api_json = this.generateAPIJSON();
                        this.localStoreCommitJSON();
                    });
                })
                .catch((err) => {
                    console.error("Commit fetch error", err);
                    this.commit_retry_count++;
                })
                .finally(() => {
                    this.commit_fetch_pending = false;
                });
        }
    }
    private localStoreGHAPIJSON() {
        this.storeJSON(this.gh_api_local_storage_key, this.user_events_json);
    }
    private localLoadGHAPIJSON() {
        this.user_events_json = this.loadJSON(this.gh_api_local_storage_key);
    }
    private localStoreCommitJSON() {
        this.storeJSON(this.commit_local_storage_key, this.commit_json);
    }
    private localLoadCommitJSON() {
        this.commit_json = this.loadJSON(this.commit_local_storage_key);
    }
    private storeJSON(key: string, object: JSON | githubAPIJSON | JSON[]) {
        if (Object.keys(object).length == 0) {
            return;
        }
        const json_str = JSON.stringify(object);
        localStorage.setItem(key, json_str);
    }
    private loadJSON(key: string) {
        let ret = {} as JSON;
        const json_str = localStorage.getItem(key);
        if (json_str) {
            return JSON.parse(json_str);
        }
        return ret;
    }
    private generateCommitFetchURL(
        push_event_json: any,
        payload_commit: number,
    ): string {
        if (!push_event_json) {
            console.error("Push Event JSON non-existent.");
        }
        if (Object.keys(push_event_json).length != 0) {
            let ret = this.gh_api_base_url + "/repos";
            this.repo_name = push_event_json.repo.name;
            ret += "/" + push_event_json.repo.name;
            ret += "/commits";
            ret += "/" + push_event_json.payload.head;
            return ret;
        }
        return "";
    }

    private generateAPIJSON(): githubAPIJSON {
        let ret = {} as githubAPIJSON;
        const additions = this.commit_json.stats.additions;
        const deletions = this.commit_json.stats.deletions;
        ret.additions = additions;
        ret.deletions = deletions;
        ret.github_url =
            "https://github.com/" +
            this.repo_name +
            "/commit/" +
            this.commit_json.sha;
        let commit_moment = moment.utc(this.commit_json.commit.author.date);
        let now_moment = moment.utc();
        let duration = moment.duration(now_moment.diff(commit_moment));
        ret.date = commit_moment.format("dddd, MMMM Do, h:mm a");
        ret.time_elapsed = duration.humanize();
        ret.name = this.commit_json.sha.slice(0, 7);
        ret.repo_name = this.repo_name;
        ret.box_colors = this.generateBoxColors(additions, deletions);
        const max_message_length = 35;
        ret.message = this.commit_json.commit.message;
        if (this.commit_json.commit.message.length > max_message_length) {
            ret.message = ret.message!.slice(0, max_message_length) + "...";
        }
        return ret;
    }
    private generateBoxColors(
        additions: number,
        deletions: number,
    ): BoxColors[] {
        let ret = [] as BoxColors[];
        let total = 1;
        const portion = 1 / this.box_count;
        let compare = additions / (additions + deletions);
        if (compare > 0) {
            if (compare < portion) {
                compare = portion;
            }
        }
        for (let i = 0; i < this.box_count; i++) {
            if (total >= compare) {
                ret.push(BoxColors.green);
            } else {
                ret.push(BoxColors.red);
            }
            total -= portion;
        }
        return ret.reverse();
    }
}
export enum BoxColors {
    red,
    green,
}
export interface githubAPIJSON {
    additions?: number;
    deletions?: number;
    date?: string;
    time_elapsed?: string;
    github_url?: string;
    name?: string;
    repo_name?: string;
    box_colors?: BoxColors[];
    message?: string;
}
