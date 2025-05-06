export class GithubAPI {
    readonly gh_api_base_url: string = "https://api.github.com";
    readonly user_events_url = this.gh_api_base_url + "/users/joemowed/events";
    readonly GH_API_MAX_RETRIES = 5;
    private commit_number: number = 0;

    public user_events_json: JSON[] = [];
    private user_events_fetch_pending: boolean = false;
    private user_events_retry_count: number = 0;

    public commit_json: any;
    private commit_fetch_pending: boolean = false;
    private commit_retry_count: number = 0;

    constructor(commit_number: number) {
        this.commit_number = commit_number;
        this.fetchUserEvents();
    }
    public fetchUserEvents() {
        if (this.user_events_json.length != 0) {
            console.log(this.user_events_json);
            return;
        }
        if (this.user_events_retry_count >= this.GH_API_MAX_RETRIES) {
            //give up if at max retry count
            return;
        }
        if (!this.user_events_fetch_pending) {
            this.user_events_fetch_pending = true;
            fetch(this.user_events_url)
                .then((data) => {
                    data.json().then((data) => {
                        this.user_events_json = this.filterUserEvents(data);
                        this.fetchCommit();
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
        return data.filter((element: any) => {
            return element.type == "PushEvent";
        });
    }
    private fetchCommit() {
        console.log(this.user_events_json);
        if (this.commit_json) {
            return;
        }
        if (this.commit_retry_count >= this.GH_API_MAX_RETRIES) {
            return;
        }
        if (!this.user_events_json) {
            console.error("user event JSON contains no events");
        }
        if (this.user_events_json.length <= this.commit_number) {
            console.error(
                `requested commmit ${this.commit_number}, user event JSON only contains ${this.user_events_json.length} PushEvents`,
            );
        }
        if (!this.commit_fetch_pending) {
            const commit_fetch_url = this.generateCommitFetchURL(
                this.user_events_json[this.commit_number],
                0,
            );
            fetch;
        }
    }
    private generateCommitFetchURL(
        push_event_json: any,
        payload_commit: number,
    ): string {
        let ret = this.gh_api_base_url + "/repos";
        ret += "/" + push_event_json.repo.name;
        ret += "/commits";
        ret += "/" + push_event_json.payload.commits[payload_commit].sha;
        console.log(ret);
        return ret;
    }
}

export interface githubAPIJSON {
    additions?: number;
    deletions?: number;
    date?: string;
    time?: string;
    timeElapsed?: string;
}
