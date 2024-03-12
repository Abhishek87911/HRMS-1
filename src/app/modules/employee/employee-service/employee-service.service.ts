
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigurationService } from "src/app/shared/service/http/configuration.service";
import { HttpService } from "src/app/shared/service/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  makePostReq(categoryGroupList: { createdBy: string; updatedBy: string; categoryGroupName: string; categoryGroupIcon: string; remarks: string; isActive: true; categoryGroupId: number; }) {
    throw new Error('Method not implemented.');
  }

  constructor(

    private httpService: HttpService,
    private configuration: ConfigurationService
  ) { }

  getEmpWithId(): Observable<any> {
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )
      //.makeGetReq(payLoad, this.configuration.getEmp)
      .makeGetReq(this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })

      );
  }
  getListEmployee(): Observable<any> {

    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )

      .makeGetReq(this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );

  }

  saveEmpPersonalDetail(empDetails: any): Observable<any> {
    debugger
    return this.httpService
      // .makeGetReq(this.configuration.getEmp, payLoad )

      .makePostReq(empDetails, this.configuration.getEmp)
      .pipe(
        map((res: any) => {
          //const responseBody = res.body;
          // if (res.status == "SUCCESS") {
          //   return res;
          // } else {
          //   return res.errorCode;
          // }
          return res;
        })
      );

  }

}
