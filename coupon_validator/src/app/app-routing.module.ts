import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: UploadComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UploadComponent, RegisterComponent];