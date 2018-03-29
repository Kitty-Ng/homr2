import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntakeComponent } from './intake/intake.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    IntakeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
