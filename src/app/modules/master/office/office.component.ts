import { Component } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {
  showQuestion: boolean = false;

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }
  preventCloses(event: MouseEvent) {
    event.stopPropagation();
  }
  closePopup() {
    this.showQuestion=false;
  }
}
