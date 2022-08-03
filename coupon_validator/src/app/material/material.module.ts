import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MaterialComponents=[
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
]

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
