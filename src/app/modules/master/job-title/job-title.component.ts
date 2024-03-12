import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from 'chart.js';

@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.scss']
})
export class JobTitleComponent {
  JobTitle =[ 
    { name: 'Art Director'},
    { name: 'Back End Devloper'},
    { name: 'Front End Devloper'},
    { name: 'Technical specialist'},
    { name: 'Computer operator'},
    { name: 'Full-stack developer'},
    { name: 'Security specialist',date: '',time:''},
  ]
  showTabs: boolean = false; 
  toggleTabs() {
      this.showTabs = !this.showTabs; 
  }
   addworkshift() {
      this.showTabs = false; 
  }
  preventClose(event: MouseEvent) {
      event.stopPropagation(); 
  }
  departmrntForm!:FormGroup
}