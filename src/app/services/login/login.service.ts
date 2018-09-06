import { Injectable } from '@angular/core';


export class LoginService {

  public role : number;

  constructor() { }

  public  loginValidate(){
    this.role=9;
    return true;
  }
}
