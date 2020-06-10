import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css', '../css/custom-material-theme.css'],
})
export class PasswordComponent implements OnInit {
  showPassword = false;
  buttonText = 'Show';
  logList: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.buttonText = 'Hide';
      this.logList.push(new Date().toTimeString());
    } else {
      this.buttonText = 'Show';
    }
  }
}
