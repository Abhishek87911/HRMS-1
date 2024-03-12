import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeSubHeaderComponent } from './employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './prosonal-details/prosonal-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { IdentityComponent } from './identity/identity.component';
import { FamilyComponent } from './family/family.component';
import { ExperienceComponent } from './experience/experience.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
// import { EmploymenComponent } from './employmen/employmen.component';
import { QualificationComponent } from './qualification/qualification.component';
import { EmploymentComponent } from './employment/employment.component';


@NgModule({
  declarations: [
    // EmployeeDashboardComponent,
    // EmployeeListComponent,
    // EmployeeSubHeaderComponent,
    // ProsonalDetailsComponent,
    // ProfileComponent,
    // ContactComponent,
    // AddressComponent,
    // IdentityComponent,
    // FamilyComponent,
    // ExperienceComponent,
    // BankAccountComponent,
    // EmploymenComponent,
    // QualificationComponent,
    // EmploymentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
