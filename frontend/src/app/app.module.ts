import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DonoraddComponent } from './donoradd/donoradd.component';
import { UpdatedonorComponent } from './updatedonor/updatedonor.component';
import { ViewdonorComponent } from './viewdonor/viewdonor.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenusComponent } from './menus/menus.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    DonoraddComponent,
    UpdatedonorComponent,
    ViewdonorComponent,
    MenusComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,

    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
