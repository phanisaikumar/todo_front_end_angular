import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class helloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  executeHelloWorldService() {
    return this.http.get<helloWorldBean>("http://localhost:8080/hello-world-bean");
  }
  executeHelloWorldServiceWithParameter(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, { headers });
  }
  createBasicAuthenticationHttpHeader() {
    let username = 'in28minutes';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
