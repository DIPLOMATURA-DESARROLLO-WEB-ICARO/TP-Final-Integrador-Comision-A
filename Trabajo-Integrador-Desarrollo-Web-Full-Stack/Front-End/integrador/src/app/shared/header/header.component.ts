import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public viewMenu: boolean = false;
  username: string = " ";
  tokenEncrypted: any = "";
  tokenDecrypted: any = "";

  constructor() { }

  ngOnInit(): void {
    this.tokenEncrypted = localStorage.getItem("token");
    this.parseJwt()
  }

  clearLocalStorage(){
    localStorage.removeItem("token");
    this.username = " ";
    this.viewMenu = false;
  }

  parseJwt(){
    if(this.tokenEncrypted != null){
      var base64Url = this.tokenEncrypted.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      this.tokenDecrypted = JSON.parse(jsonPayload);
      this.username = this.tokenDecrypted.username.toUpperCase();
      this.viewMenu = true;
    }
  };
}
