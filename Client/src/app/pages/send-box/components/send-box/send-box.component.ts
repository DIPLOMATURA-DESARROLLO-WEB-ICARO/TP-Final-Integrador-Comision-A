import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from 'src/app/services/registrarse.service';

@Component({
  selector: 'app-send-box',
  templateUrl: './send-box.component.html',
  styleUrls: ['./send-box.component.scss'],
})
export class SendBoxComponent implements OnInit {
  constructor(private _registrarService: RegistrarseService) {}

  ngOnInit(): void {
    this.obtainUsers();
  }

  obtainUsers(): void {
    this._registrarService.getUsers().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
