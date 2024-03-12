import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  showForm: boolean = false;
  toggleForm(event: Event) {
    this.showForm = (event.target as HTMLInputElement).checked;
  }

  enableEmployeeID: boolean=false;
}
