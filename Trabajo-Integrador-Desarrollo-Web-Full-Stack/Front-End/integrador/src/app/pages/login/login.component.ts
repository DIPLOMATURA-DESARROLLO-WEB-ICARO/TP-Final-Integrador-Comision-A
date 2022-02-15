import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { ToastComponent } from 'src/app/shared/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  public jsonData: any = {};

  constructor(private loginService: LoginService, private toast: ToastComponent) { }

  ngOnInit(): void {
  }

  login(){
    let username = this.username
    let password = this.password
    this.jsonData = {username, password}
    this.loginService.postLogin(this.jsonData).subscribe((res: any)=>{
      console.log("🚀 ~ file: login.component.ts ~ line 26 ~ LoginComponent ~ this.loginService.postLogin ~ res", res)
      console.log(res)
      if(res.status == 200){
        localStorage.setItem("token", res.Authorization.split(" ")[1]);
        this.toast.msgToast(res.status);
        window.setTimeout(() => {window.location.href = '/inbox'}, 1500 )
      } else if (res.status != 200){
        this.toast.msgToast(res.status);
      }
    });
  }
}
