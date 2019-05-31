import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  phone: any;
  email: any;
  password: any;
  cPassword: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(name: any, phone: any, email: any, password: any) {
    this.userService
      .register(name, phone, email, password)
      .subscribe((user) => {
        console.log(user);
      }, (err) => {
        console.log(err);
      });
  }
}
