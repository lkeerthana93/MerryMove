import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';

@Injectable()
export class UserService {
  api = {
    register : this.register
  };

  apiEndPoint = {
    register : AppConstants.ApiEndPoint.baseUrl + 'register'
  };

  constructor(private http: HttpClient) { }

  register(name, phone, email, password) {
    const url = this.apiEndPoint.register;
    const newUser = {
      name,
      email,
      phone,
      password
    };
    return this.http.post(url, newUser, { withCredentials : true });
  }
}
