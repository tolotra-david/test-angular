import { HttpClientModule } from '@angular/common/http';
import { AuthGaurd } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { FakeComponent } from './components/fake/fake.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListsComponent,
    FakeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    AuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
