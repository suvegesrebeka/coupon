import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {
  private emailSource = new BehaviorSubject<string>("");
  email= this.emailSource.asObservable();
  constructor() { }

  
  changeEmail(email_:string){
    console.log("changeEmail: " + email_)
    this.emailSource.next(email_);
  }
}
