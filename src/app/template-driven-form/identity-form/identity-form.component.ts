import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.css']
})
export class IdentityFormComponent implements OnInit {

  person = {firstname: '', lastname: ''};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form has been submitted');
  }
}
