import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  readonly projects: Project[] = [
    {
      heading: 'FPGA Dev Board',
      card: [{
        subheading: 'Purpose',
        description: 'Designed a Spartan-7 based FPGA development board.  After taking a logic design class, I was curious as to how the board we were using worked, so in an effort to learn more I designed one myself.',
        imageRelUrl: '../../assets/fpga-q.png'

      }, {
        subheading: 'Design',
        description: 'In my design I included a boutique DC-DC converter as well as a properly isolated AC signal pathway.',
        imageRelUrl: '../../assets/fpga2d-q.png'
      }
        , {
        subheading: 'What I Learned',
        description: 'I became much more competent at transforming information on a datasheet to traces on a PCB.',
        imageRelUrl: '../../assets/fpgaSchematic-q.png'
      }
      ]
    },


  ]

  activeProject = this.projects[0].heading
  isMobile: boolean = false;
  menuActive: boolean = false;
  ngOnInit(): void {
    if (window.innerWidth < 1024) {
      this.isMobile = true
    }
  }
  inHeading(heading: string) {
    const info = this.getIndexInfo(heading);
    if (window.innerWidth > 1024) {
      this.projects.forEach((each) => {
        if (each.heading != heading) {
          //     document.getElementById(each.heading)?.classList.add('text-white/0')
        }
      });
    }
  }
  outHeading(heading: string) {
    this.projects.forEach((each) => {
      //  document.getElementById(each.heading)?.classList.remove('text-white/0')
    });

  }
  getIndexInfo(heading: string): { indexOf: number, size: number } {
    const def = {
      indexOf: 0,
      size: 1
    }
    let i = 0;
    def.size = this.projects.length;
    for (; i < def.size; i++) {
      if (this.projects[i].heading == heading) {
        def.indexOf = i;
        break;
      }
    }
    return def

  }

  changeActive(heading: string) {
    this.activeProject = heading;
    if (this.isMobile) {
      this.menuActive = false;
    }
  }
  showMenu() {

    this.menuActive = !this.menuActive;

  }

}
export interface Project {
  heading: string,
  card: {
    subheading: string,
    description: string,
    imageRelUrl: string
  }[]
};
