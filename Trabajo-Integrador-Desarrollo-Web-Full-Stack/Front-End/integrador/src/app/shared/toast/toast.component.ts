import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
@Injectable({
  providedIn: 'root',
})
export class ToastComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  msgToast(code: number){
    console.log("code ",code )
    if(code == 200){
      return Swal.fire({
        title: 'Bienvenido!',
        text: 'Login correcto',
        icon: 'success',
        timer: 2000,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
      })
    } else{
      return Swal.fire({
        title: 'Error!',
        text: 'Credenciales incorrectas',
        icon: 'error',
        timer: 2000,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
      })
    }  
  }

}
