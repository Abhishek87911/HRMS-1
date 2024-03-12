import { Component } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent {
  showForm: boolean = false;

  toggleForm(event: Event) {
    this.showForm = (event.target as HTMLInputElement).checked;
  }

  enableEmployeeID: boolean=false;
}
