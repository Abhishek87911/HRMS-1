import { Component } from '@angular/core';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent {
  selectedFile: File | null = null; // Property to store the selected file

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  
  getObjectURL(file: File): string {
    if (file) {
      return URL.createObjectURL(file);
    }
  return'';
  }
}
