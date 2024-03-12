import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service/employee-service.service';

@Component({
  selector: 'app-prosonal-details',
  templateUrl: './prosonal-details.component.html',
  styleUrls: ['./prosonal-details.component.scss']
})
export class ProsonalDetailsComponent {

  fullName!: string;
  dob!: Date;
  gender!: number;
  bloodGroup!: number;
  reliegion!: number;
  fatherorHusbandName!: string;
  maritalStatus!: number;
  dateofMarriage!: Date;
  mobileNo!: string;
  email!: string;

  constructor(private employeeService: EmployeeServiceService) { }

  saveproductdata() {
    const empDetails = {
      createdBy: "1",
      updatedBy: "1",
      fullName: this.fullName,
      dob: this.dob,
      gender: this.gender,
      bloodGroup: this.bloodGroup,
      reliegion: this.reliegion,
      fatherorHusbandName: this.fatherorHusbandName,
      maritalStatus: this.maritalStatus,
      dateofMarriage: this.dateofMarriage,
      mobileNo: this.mobileNo,
      email: this.email
    };

    this.employeeService.saveEmpPersonalDetail(empDetails).subscribe(
      () => {
        alert('Employee added');
      },
      (error) => {
        console.error(error);
        alert('Something went wrong while saving the employee details');
    }
 );
 }
}
