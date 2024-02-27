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
      heading: 'Follower Counter',
      card: [{
        subheading: 'Device',
        description: 'This device gets the number of followers/subscribers someone has and displays the number on a large 7-segment display.  It uses an ESP32 to control the display and communicate over the internet.',
        imageRelUrl: '../../assets/subc-q.png',
      }, {
        subheading: 'System Architecture',
        description: 'To increase the speed new features (e.g. supporting new social media platforms) can be implemented, each device has a unique ID corresponding to a database entry containing the number to display.  This number is updated by a google cloud instance communicating with social media APIs, based on a users web based device configuration.  This eliminates the need for OTA updates.',
        imageRelUrl: '../../assets/subCDiagram-q.png',
      }, {
        subheading: 'What I Learned',
        description: 'System architecture plays a large role in determining the complexity of a product.  Good system architecture can increase the speed of creating a MVP, by eliminating time spent on developing complex ways to achieve something that can be done a simpler way.',
        imageRelUrl: '../../assets/SubCLayout-q.png',
      }]
    },
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
    {
      heading: 'Matrix Display Clock',
      card: [
        {
          subheading: 'Design',
          description: 'Using an CORTEX-M4 MCU, an I2C RTC, and a 64x32 RGB led matrix, I made a alarm clock.  This was done first inside the arduino framework, and then later without the arduino framework.',
          imageRelUrl: '../../assets/clock-q.png'

        }, {
          subheading: 'Initialization',
          description: 'When writing the linker file and reset vector functions, the bug to the left was insiduous.  GCC optimized out writing function references to the reset vector table on anything other than -O0.',
          imageRelUrl: '../../assets/noOpt-q.png'

        }, {
          subheading: 'What I Learned',
          description: 'Programming an MCU from the linker file upwards taught me alot about how code in a text editor becomes ones and zeros that can be written to flash storage and ran on a MCU, as well as about how memory mapped registers and I/O control all aspects of a MCU.',
          imageRelUrl: '../../assets/240Meg-q.png'

        },
      ]

    }, {
      heading: "Misc",
      card: [{
        subheading: 'Tiny Thermometer',
        description: 'Designed a tiny (3cmx4cm) ESP32 and thermocouple based thermometer.',
        imageRelUrl: '../../assets/tinyTemp-q.png'
      }, {
        subheading: 'Machine Learning (in progress)',
        description: 'I am currently working on a basic, derivative based machine learning algorithm, implemented from scratch in c++.  This will serve as a foundation to learning more complex algorithms in the future.',
        imageRelUrl: '../../assets/mlone-q.png'
      },]
    }


  ]

  activeProject = this.projects[1].heading
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
