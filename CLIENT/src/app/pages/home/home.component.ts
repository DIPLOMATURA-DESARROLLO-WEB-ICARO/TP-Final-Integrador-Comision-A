import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({

    username: [""],
    password: [""],

  });


  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.value);
  }

}


