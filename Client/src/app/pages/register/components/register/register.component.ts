import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrarseService } from 'src/app/services/registrarse.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  title = 'Register';

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
