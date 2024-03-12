import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  TimeSheetData =[ 
    {id:'1', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'2', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'3', punch_in: '10 AM',date:'01 jan 2024'},
    {id:'4', punch_in: '10 AM',date:'01 jan 2024'},
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
  addDepartment() {
      this.showTabs = false; 
  }
  preventClose(event: MouseEvent) {
      event.stopPropagation(); 
  }

  timeSheetForm!:FormGroup
}
