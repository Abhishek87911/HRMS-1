import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
  getApiUrl() {
    throw new Error('Method not implemented.');
  }
  public ApiUrl = 'https://biller.koiv.in/api/';  
  /** Authentication Url's **/
  public readonly getEmp = "EmpPersDtls";

}