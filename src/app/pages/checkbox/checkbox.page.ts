import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {


   chex: checkBoxer[] = [
     {
       val: 'is checkec',
       isChecked: true,
       disabled: false,
       color: 'danger',
       tySlot: 'end'
     },
     {
       val: 'other',
       isChecked: false,
       disabled: false,
       color: 'light',
       tySlot: 'start'
     }
   ];
  constructor() { }

  ngOnInit() {
  }

}

interface checkBoxer {
  val: string;
  isChecked: boolean;
  disabled: boolean;
  color: string;
  tySlot: string;
}