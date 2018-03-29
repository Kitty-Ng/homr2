import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from './../User';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {
  private user:User;
  private addressForm: FormGroup;
  step = 0;

  constructor() {}

  ngOnInit() {
    this.addressForm = new FormGroup ({
      address: new FormControl(),
    })
  }
  
  setStep(index: number) {
    this.step = index;
  }
  
  nextStep() {
    this.step++;
  }
  
  prevStep() {
    this.step--;
  }

  helpMeHomr() {
    console.log('helpMeHomr Clicked')
  }

}