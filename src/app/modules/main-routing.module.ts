import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSubHeaderComponent } from './employee/employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './employee/prosonal-details/prosonal-details.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmploymentComponent } from './employee/employment/employment.component';
import { QualificationComponent } from './employee/qualification/qualification.component';
import { AddressComponent } from './employee/address/address.component';
import { ContactComponent } from './employee/contact/contact.component';
import { IdentityComponent } from './employee/identity/identity.component';
import { BankAccountComponent } from './employee/bank-account/bank-account.component';
import { FamilyComponent } from './employee/family/family.component';
import { ExperienceComponent } from './employee/experience/experience.component';
import { MasterSubHeaderComponent } from './master/master-sub-header/master-sub-header.component';
import { DepartmentComponent } from './master/department/department.component';
import { DesignationComponent } from './master/designation/designation.component';
import { ClientComponent } from './master/client/client.component';
import { OfficeComponent } from './master/office/office.component';
import { QuickLinksComponent } from './common/quick-links/quick-links.component';
import { LeaveSubHeaderComponent } from './leave/leave-sub-header/leave-sub-header.component';
import { ApplyComponent } from './leave/apply/apply.component';
import { MyLeaveComponent } from './leave/my-leave/my-leave.component';
import { MyLeaveUsageComponent } from './leave/my-leave-usage/my-leave-usage.component';
import { AttendanceSubHeaderComponent } from './attendance/attendance-sub-header/attendance-sub-header.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { EmployeeAttendanceComponent } from './attendance/employee-attendance/employee-attendance.component';
import { ApproveRejectComponent } from './attendance/approve-reject/approve-reject.component';
import { AssetSubHeaderComponent } from './asset/asset-sub-header/asset-sub-header.component';
import { AssetsListComponent } from './asset/assets-list/assets-list.component';
import { BrandComponent } from './asset/brand/brand.component';
import { CategoryComponent } from './asset/category/category.component';
import { VendorComponent } from './asset/vendor/vendor.component';
import { EductionComponent } from './master/eduction/eduction.component';
import { WorkShiftComponent } from './master/work-shift/work-shift.component';
import { JobTitleComponent } from './master/job-title/job-title.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
// yort { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [{
  path: '',
  component: MainDashboardComponent,
  children: [
    { path: '', redirectTo: '', pathMatch: "full" }, // for refresh url geting error 404
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
    { path: 'empSubHeader', component: EmployeeSubHeaderComponent },
    { path: 'personal', component: ProsonalDetailsComponent },
    { path: 'Empdashboard', component: EmployeeDashboardComponent },
    { path: 'Emplist', component: EmployeeListComponent },
    { path: 'employement', component: EmploymentComponent },
    { path: 'qualification', component: QualificationComponent },
    { path: 'address', component: AddressComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'identity', component: IdentityComponent },
    { path: 'bankaccount', component: BankAccountComponent },
    { path: 'family', component: FamilyComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'profile', component: ProfileComponent },
    //**************Master**************//
    { path: 'MasterHeader', component: MasterSubHeaderComponent },
    { path: 'department', component: DepartmentComponent },
    { path: 'designation', component: DesignationComponent },
    { path: 'client', component: ClientComponent },
    { path: 'office', component: OfficeComponent },
    { path: 'quick', component: QuickLinksComponent },
    { path: 'eduction', component: EductionComponent },
    { path: 'Workshift', component: WorkShiftComponent },
    { path: 'jobTitle', component: JobTitleComponent },
    //***********************Asset************************** */
    { path: 'assetheader', component: AssetSubHeaderComponent },
    { path: 'assetlist', component: AssetsListComponent },
    { path: 'assetbrand', component: BrandComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'vendor', component: VendorComponent },
    //***********************Leave************************** */
    { path: 'leaveHeader', component: LeaveSubHeaderComponent },
    { path: 'apply', component: ApplyComponent },
    { path: 'leave', component: MyLeaveComponent },
    { path: 'leaveusage', component: MyLeaveUsageComponent },
    //***********************Attendance************************** */
    { path: 'atteHeader', component: AttendanceSubHeaderComponent },
    { path: 'alist', component: AttendanceListComponent },
    { path: 'empatt', component: EmployeeAttendanceComponent },
    { path: 'apprej', component: ApproveRejectComponent },
    //***********************Timesheet************************** */
    { path: 'timesheet', component: TimesheetComponent },



  ],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
