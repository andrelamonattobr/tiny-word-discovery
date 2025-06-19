import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  showLogin: boolean = true;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    
  }

  login(username: string, password: string){
    if (username == "admin" && password == "admin"){
      sessionStorage.setItem("logged", "yes");
      this.router.navigate(["main"]);
    }
  }

}
