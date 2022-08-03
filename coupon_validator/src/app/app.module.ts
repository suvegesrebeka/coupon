import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule} from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadComponent } from './components/upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UploadComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatNativeDateModule,
    HttpClientModule,
    DatePipe
 
  ],
  providers: [DatePipe,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
