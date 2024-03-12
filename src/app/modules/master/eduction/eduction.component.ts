import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.scss']
})
export class EductionComponent {
  eductionList =[ 
    {id:'1', punch_in: '10+2',date:'01 jan 2024'},
    {id:'2', punch_in: '10th',date:'01 jan 2024'},
    {id:'3', punch_in: 'Bca',date:'01 jan 2024'},
    {id:'4', punch_in: 'Bcom',date:'01 jan 2024'},
    {id:'5', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'6', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'7', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'8', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'9', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'7', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'8', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'9', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'7', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'8', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'9', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'7', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'8', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'9', punch_in: '10 AM',date:'01 jan 2024'},
  ]

  showTabs: boolean = false;
    
  toggleTabs() {
      this.showTabs = !this.showTabs; 
  }
  addEduction() {
      this.showTabs = false; 
  }
  preventClose(event: MouseEvent) {
      event.stopPropagation(); 
  }

  departmrntForm!:FormGroup

}
