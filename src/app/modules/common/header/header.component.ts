
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core-module/auth-service/auth.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngOnInit(): void { }
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }
  logout() {
    this.auth.logout();
  }
  
  @Input() heading = 'Home'
  @Input() isLayoutLtr: boolean = true;
  isLowerNav = false;

  languages = [
    {
      name: 'English',
      flagClass: 'flag flag-united-states'
    },
    {
      name: 'Hindi',
      flagClass: 'flag flag-india'
    },
    {
      name: 'Arabic',
      flagClass: 'flag flag-saudi-arabia'
    },
    {
      name: 'Chinese',
      flagClass: 'flag flag-china'
    },
    {
      name: 'Japanese',
      flagClass: 'flag flag-japan'
    }
  ]

  alerts = [
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
    {
      data: 'This is an alert message for test.',
    },
  ]

  messages = [
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
    {
      by: 'Sender',
      msg: 'This is a message sent by the sender to you.'
    },
  ]

  isLangDropOpen = false
  isAlertDropOpen = false
  isMsgDropOpen = false
  isProfileDropOpen = false

  onLangBtnClick(){
    this.isLangDropOpen = !this.isLangDropOpen
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
  }
  onAlertBtnClick(){
    this.isAlertDropOpen = !this.isAlertDropOpen
    this.isLangDropOpen = false
    this.isMsgDropOpen = false
    this.isProfileDropOpen = false
  }
  onMsgBtnClick(){
    this.isMsgDropOpen = !this.isMsgDropOpen
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isProfileDropOpen = false
  }
  onProfileBtnClick(){
    this.isProfileDropOpen = !this.isProfileDropOpen
    this.isLangDropOpen = false
    this.isAlertDropOpen = false
    this.isMsgDropOpen = false
  }

  toggleLowerNavbar() {
    this.isLowerNav = !this.isLowerNav
}
}