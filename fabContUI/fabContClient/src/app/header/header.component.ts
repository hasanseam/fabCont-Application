import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }
  userName:string = 'Private'
  ngOnInit(): void {
  }
  collapsed = true;
  toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
  }

  loginFormSubmit(loginForm)
  {
    this.auth.setUser(this.userName)
    console.log(this.auth.getuser())
  }
}
