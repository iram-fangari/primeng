import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule} from 'primeng/card';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';
// import {ConfirmPopupModule} from 'primeng/confirmpopup';
// import {ConfirmationService} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    MultiSelectModule,
    ToastModule,
    ToggleButtonModule,
    CalendarModule,
    DialogModule,
    BrowserAnimationsModule,
    SidebarModule,
    MatSidenavModule,
    LayoutModule,
    UsersModule,
    HttpClientModule,
    MatListModule


// ConfirmPopupModule,
// ConfirmationService

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
