import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('hello world');
  }

}
