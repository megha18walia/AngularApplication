import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//For [(NgModel)] - Two way Binding
import {FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.component';
import {studentComponent} from './student/student.component';
import {gridComponent} from './Grid/grid.component';
import { SalutationPipe } from "./Grid/SalutationPipe";
import {employeetest} from "./empdata/employeetest.component";
import {empradio} from "./empdata/empradio.component"

@NgModule({
  declarations: [
    AppComponent , employeeComponent, studentComponent, gridComponent, SalutationPipe, employeetest, empradio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
