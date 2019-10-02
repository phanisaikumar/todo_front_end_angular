import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "in28minutes";
  password = "";
  inValidLogin: boolean = false;
  errorMsg :string = "invalid login credentials"
  constructor(private router :Router, private hardCodedAuthenticationService :HardcodedauthenticationService) {}

  ngOnInit() {}

  handleLogin() {
    //console.log(this.username);
    if (this.hardCodedAuthenticationService.authenticate(this.username,this.password)) {
      this.router.navigate(['welcome',this.username])
    } else {
      console.log(this.hardCodedAuthenticationService.authenticate(this.username,this.password));
      this.inValidLogin = true;
    }
  }
}
