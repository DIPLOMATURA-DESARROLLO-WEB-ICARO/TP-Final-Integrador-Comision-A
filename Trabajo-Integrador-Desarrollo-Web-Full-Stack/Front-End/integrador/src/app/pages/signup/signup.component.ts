import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import { SignupService } from 'src/app/services/signup.service';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public countries: any = []
  public cities: any = []
  public newUser: FormGroup;
  public validPass: boolean = false;
  public flagMsgPass: boolean = false;
  public flagSelectCountry: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private locationsService: LocationsService,
    ){
    this.newUser = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      repeat_password: [''],
      country: [''],
      city: [''],
    })
    this.getCountries()
  }

  ngOnInit(): void {
  }

  clearNewUser(): void {
    this.newUser = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      repeat_password: [''],
      country: [''],
      city: [''],
    });
    this.validPass = false;
    this.flagMsgPass = false;
  }

  ValidatorNewUser(): void {
    if(this.newUser.value.password === this.newUser.value.repeat_password){
      this.validPass = true
    } else{
      this.flagMsgPass = true;
    }
    this.newUser = this.formBuilder.group({
      firstname: [this.newUser.value.firstname, Validators.required],
      lastname: [this.newUser.value.lastname, Validators.required],
      username: [this.newUser.value.username, Validators.required],
      password: [this.newUser.value.password, Validators.required],
      repeat_password: [this.newUser.value.repeat_password, Validators.required],
      country: [this.newUser.value.country, Validators.required],
      city: [this.newUser.value.city, Validators.required],
    });
  }

  signup(event: Event){
    event.preventDefault();
    this.ValidatorNewUser()
    if(this.newUser.valid && this.validPass){
        this.signupService.postSignup(this.newUser.value).subscribe((res: any)=>{
          console.log("🚀 ~ file: login.component.ts ~ line 26 ~ LoginComponent ~ this.loginService.postLogin ~ res", res)
          if(res.status == 200){
            window.location.href = "/login"
          }
        });;
        console.log(this.newUser.value);
        this.clearNewUser()
    }
  }

  getCountries(){
    this.locationsService.getCountries().subscribe((res: any)=>{
      console.log("🚀 ~ file: signup.component.ts ~ line 86 ~ SignupComponent ~ this.locationsService.getCountry ~ res", res.data)
      this.countries = res.data
    })
  }

  // async selectCountry(){
  //   let country = this.newUser.value.country
  //   this.cities = await this.getCities(country)
  //   console.log(this.cities)
  // }

  // getCities(country: any){
  //   console.log("entro al get", country)
  //   let body = { country }
  //   return this.locationsService.getCities(body).subscribe((res:any)=>{
  //     console.log("🚀 ~ file: signup.component.ts ~ line 86 ~ SignupComponent ~ this.locationsService.getCountry ~ res", res.data)
  //     this.cities = res.data
  //   })
  // }

  getCities(){
    this.cities = []
    let country = this.newUser.value.country
    console.log("entro al get", country)
    let body = { country }
    if(country != ''){
      this.locationsService.getCities(body).subscribe((res:any)=>{
        console.log("🚀 ~ file: signup.component.ts ~ line 86 ~ SignupComponent ~ this.locationsService.getCountry ~ res", res.data)
        this.cities = res.data
      })
    }
  }

  
}
