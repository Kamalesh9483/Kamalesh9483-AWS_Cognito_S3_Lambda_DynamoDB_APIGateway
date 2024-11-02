import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
