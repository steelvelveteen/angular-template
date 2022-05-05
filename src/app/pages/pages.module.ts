import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule],
  declarations: [HomeComponent, NavbarComponent],
  exports: [HomeComponent, NavbarComponent],
  providers: [],
})
export class PagesModule {}
