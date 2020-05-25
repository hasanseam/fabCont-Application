import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private loggedInuser = localStorage.getItem('logInUser')||'Private'
  private loggedInStatus = localStorage.getItem('logInStatus')||'false'
  setUser(value){
     this.loggedInuser = value
     localStorage.setItem('logInUser',value)
  }

  setLoginStatus(value)
  {
    this.loggedInStatus = value
    localStorage.setItem('logInstatus','true')
  }

  getIsLoggedIn(){
    return localStorage.getItem('logInstatus')||this.loggedInStatus.toString()
  }

  getuser(){
    return localStorage.getItem('logInUser')||this.loggedInuser.toString()
  }
}
