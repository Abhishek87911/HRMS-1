import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {




  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      projectName: new FormControl(null, Validators.required),
      taskName: new FormControl(null, Validators.required),
      detail: new FormControl(null, Validators.required),
      workingHour: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      
    });
  }

  get projectName(): AbstractControl {
    return this.validationForm.get('projectName')!;
  }

  get taskName(): AbstractControl {
    return this.validationForm.get('taskName')!;
  }
  
  get detail(): AbstractControl {
    return this.validationForm.get('detail')!;
  }

  get workingHour(): AbstractControl {
    return this.validationForm.get('workingHour')!;
  }
  

  
  



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
