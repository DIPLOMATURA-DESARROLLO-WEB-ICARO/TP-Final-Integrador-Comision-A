import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    lastName:[""],
    name:[""],
    username: [""],
    password: [""],
    country : [""],
    city: [""],
    notificaciones: [true]

  });

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registerForm.value);
  }

  refrescar(){
    this.registerForm.patchValue({
    lastName:"",
    name:"",
    username: "",
    password: "",
    country : "",
    city: "",
    notificaciones: true,
    });
  }

}
