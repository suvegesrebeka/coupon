import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from "@angular/material/core";
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [DataService]
})
export class UploadComponent implements OnInit {
  constructor(private route: Router, private dataservice: DataService, public datepipe: DatePipe, private http: HttpClient) {}
  ngOnInit(): void {}

  //nap beallitas
  today = new Date();
  minDate = new Date(2022, 6, 1);
  maxDate = this.today;

//number input value ertekadas
  counter(i: any) {
    if (i > 9) {
    }
    return new Array(i);
  }
  dd = this.today.getDate().toString();
  longMonth = this.today.toLocaleString('hu-Hu', { month: 'long' });
  isShow = true;

  // date placeholder mai datum

  toggleDisplay() {
    if (this.isShow)
      this.isShow = false;
  }

  //Reactive form validation

  profileform = new FormGroup({
    email: new FormControl("", [Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    code: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern('^[A-Za-z0-9]$')//pattern nem mukodott
    ]),
    date: new FormControl("", [Validators.required]),
    // hour: new FormControl("", [Validators.required]), //nem mukodo numberinoutok
    // minute: new FormControl(this.minuteInput, [Validators.required])//show always the error code
  });

  get code() {
    return this.profileform.get('code')
  }
  get email() {
    return this.profileform.get('email')
  }
  get date() {
    return this.profileform.get('date')
  }
  // ido beallitas nromalis formaba
  hour: any
  minute: any;
  getHour(hour: any) {

    if (hour < 10) {
      this.hour = "0" + hour;
    } else this.hour = hour;

    console.log("hh" + hour);
  }
  getMinute(minute: any) {

    console.log("mm" + minute);
    if (minute < 10) {
      this.minute = "0" + minute;
    } else this.minute = minute;
  }
  // kodfeltoltos Post RESTAPI
  time: any;
  dateChange: any;
  emailChange: any;
  codeChange: any;
  stringBody: any;
  apikey: string = "suveges-rebeka";
  summ = 0;
  won: boolean;
  onSubmit(value: any) {
    this.time = this.hour + ":" + this.minute;
    console.log("time: " + this.time);
    console.log(value);
    this.dateChange = this.datepipe.transform(this.date?.value, 'yyyy-MM-dd');
    this.emailChange = this.email?.value;
    this.codeChange = this.code?.value;
    this.dateChange = this.dateChange.concat(" " + this.time);
    const headers = { 'content-type': 'application/json' };
    console.log("date: " + this.dateChange)
    console.log("email: " + Object.values(value)[0])
    console.log("code: " + Object.values(value)[1])
    const params = { email: Object.values(value)[0], code: Object.values(value)[1], purchase_time: this.dateChange };
    this.stringBody = JSON.stringify(params);
    console.log(this.stringBody)
    this.http.post<any>(`https://ncp-dummy.staging.moonproject.io/api/${this.apikey}/code/upload/`, this.stringBody, { 'headers': headers }).subscribe(data => {
      console.log(data.data.won)
      this.won = data.data.won
      this.summ = 1;
    }, error => {
      console.log(error.error.errors[0].code);
      if (error.error.errors[0].code === "email:not_found") { //register routing
        this.route.navigate(['/register']);
      }
    })
    this.summ = 2;
  }


  ///*******************************PROBAK*********************************






  //email value kiiratas
  getValue(box: any) {
    this.displayVal = box;
    console.log(box);
  }
  displayVal = '';
  //ido beallitas



  //number input validalas proba

  //functions for hour/minute validators
  // get hour() {
  //   return this.profileform.get('hour')
  // }
  // get minute() {
  //   return this.profileform.get('minute')
  // }

  //1. próbálkozás az email átadásnak

  // @Output() messageEvent = new EventEmitter<string>(); 
  // sendMessage() {
  //   return this.messageEvent.emit(this.displayVal)// email value küldés a másik componens számára
  // }
  //2. proba servicevel
  // this.dataservice.changeEmail(this.displayVal) // email atadas
}