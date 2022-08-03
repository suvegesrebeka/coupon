import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {
  //email binding


  constructor(private route: Router, private dataservice: DataService, public datepipe: DatePipe, private http: HttpClient) { }

  ngOnInit(): void { }

  //FormValidation
  registerform = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
  });

  get name() {
    return this.registerform.get('name')
  }
  get email() {
    return this.registerform.get('email')
  }

  //regisztrációs RESTAPI
  emailChange: any;
  codeChange: any;
  stringBody: any;
  apikey: string = "suveges-rebeka";
  summ = 0;
  emailVal: string;
  nameVal: string;

  response: boolean = false;
  setEmail(email: any) {
    this.emailVal = email;
  }
  setName(name: string) {
    this.nameVal = name;
  }

  onSubmit() {
    console.log("name" + this.nameVal);
    console.log("email" + this.emailVal);
    const headers = { 'content-type': 'application/json' };
    const params = { email: this.emailVal, name: this.nameVal };
    this.stringBody = JSON.stringify(params);
    console.log(this.stringBody)
    this.http.post<any>(`https://ncp-dummy.staging.moonproject.io/api/${this.apikey}/user/register/`, this.stringBody, { 'headers': headers }).subscribe(data => {
      console.log("data: " + data.data.success)
      if (data.data.success) {
        this.response = true;
        this.summ = 1
      }
    }, error => {
      this.summ = 1;
      console.log(error.message);
      this.response = false;

    })
    this.summ = 0;
  }
}


// ****************************proba****************************



//email fogadasa

// emailValue = ""
// receiveMessage($event: any) {
//   this.emailValue = $event;
// }

// this.dataservice.email.subscribe(data => {
//   console.log("subscribe: "+data)
//   this.emailVal =data;})


