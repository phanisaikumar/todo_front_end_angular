import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromService:string;
  constructor(private router: ActivatedRoute, private welcomeDataService : WelcomeDataService) { }

  ngOnInit() {
    this.name = this.router.snapshot.params['name']
  }
  getWelcomeMessage(){
    this.welcomeDataService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcome message")
  }

  getWelcomeMessageWithParameter(){
    this.welcomeDataService.executeHelloWorldServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcome message")
  }
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error:any){
    this.welcomeMessageFromService = error.error.message;
  }

}
