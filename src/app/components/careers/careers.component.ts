import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    linkedIn: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    notice: new FormControl('', Validators.required),
    formFile: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
