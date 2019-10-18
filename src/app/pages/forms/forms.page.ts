import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  dataF: strucData = {
    user: '',
    pass: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    console.log('submit', this.dataF);
  }

}

interface strucData {
  user: string;
  pass: string;
}