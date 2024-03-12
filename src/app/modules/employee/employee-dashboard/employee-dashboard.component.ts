 
import { Component } from '@angular/core'; 
import { employeeList } from 'src/app/shared/models/employeelist';
import { EmployeeServiceService } from 'src/app/modules/employee/employee-service/employee-service.service'
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  categoryGroup: Array<employeeList> = [];
  showOptions: boolean[] = [];
  defaultImage: string = 'assets/img/profile.png';
  toggleOptions(index: number) {
      // Toggle the showOptions property for the clicked item
      this.showOptions[index] = !this.showOptions[index];
  }

  constructor(private EmployeeServiceService: EmployeeServiceService) { }

  ngOnInit() {
      // Simulate loading for 1 seconds
    //   setTimeout(() => {
          this.getEmployeeList();
    //   }, 1000);
  }

  getEmployeeList() {
      this.EmployeeServiceService.getListEmployee().subscribe(
          (res) => {
              this.categoryGroup = res;
              this.showOptions = res.map(() => false); // Initialize showOptions for each item
          },
          (error) => {
              console.error(error);
          }
      );
  }

//   getImageURL(imageFileName: string): string {
//     if (imageFileName && imageFileName !== 'string') {
//         return assets/images/${imageFileName};
//     }
//     else {
//         return this.defaultImage;
//     }
// }

// getImageURL(imageFileName: string): string {
//     const defaultImage: string = 'assets/img/profile.png'; // Path to the default image
//     if (imageFileName && typeof imageFileName === 'string') {
//         // If the imageFileName is valid, return the URL to the image
//         return assets/images/${imageFileName};
//     } else {
//         // If the imageFileName is not valid, return the URL to the default image
//         return defaultImage;
//     }
// }
getImageURL(imageFileName: string): string {
    if (imageFileName && imageFileName !== 'string') {
      return `assets/images/${imageFileName}`;
    } else {
      return this.defaultImage;
    }
  }
}