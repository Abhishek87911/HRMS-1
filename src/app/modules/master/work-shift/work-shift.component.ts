import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work-shift',
  templateUrl: './work-shift.component.html',
  styleUrls: ['./work-shift.component.scss']
})
export class WorkShiftComponent {
  workshift =[ 
    {id:'1', name: 'Varun', from:'11AM', to:'7PM', hours:'9hours'},
    {id:'2', name: 'Sameer', from:'12AM', to:'8PM', hours:'9hours'},
    {id:'3', name: 'Priya', from:'10AM', to:'6PM', hours:'8hours'},
  
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

  departmrntForm!: FormGroup
  workShift: string = '';
  startTime: string = '';
  endTime: string = '';
  hoursPerDay: string = '';
  dialogRef: any;

  calculateHoursPerDay(): void {
    if (this.startTime && this.endTime) {
      const startParts = this.startTime.split(':');
      const endParts = this.endTime.split(':');

      const startHours = parseInt(startParts[0], 10);
      const startMinutes = parseInt(startParts[1], 10);

      const endHours = parseInt(endParts[0], 10);
      const endMinutes = parseInt(endParts[1], 10);

      // Calculate the total minutes
      const totalMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);

      // Convert total minutes to hours and round down to the nearest whole number
      const hours = Math.floor(totalMinutes / 60);

      // Update the hours input
      this.hoursPerDay = hours.toFixed(2);
    }
  }

  onendTime(): void {
    // You can perform any other actions you need here
    console.log('Work Shift:', this.workShift);
    console.log('Start Time:', this.startTime);
    console.log('End Time:', this.endTime);
    console.log('Hours per Day:', this.hoursPerDay); }
}
 
