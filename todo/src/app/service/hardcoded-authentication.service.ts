import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string, password: string):boolean {
    // console.log('before'+this.isUserLoggedIn())
    if(username==='kaija' && password==='123'){
      if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('authenticatedUser',username);
      // console.log('after'+this.isUserLoggedIn())
      
    }
    return true;
  }
    else{
      return false;
    }
  }

  logout(){
    let user=sessionStorage.removeItem('authenticatedUser');
    return !(user==null)
  }

  isUserLoggedIn():boolean{
     if (typeof window !== 'undefined' && window.sessionStorage) {
    let user= sessionStorage.getItem('authenticatedUser');
    return !(user==null)
   }
  return false;
}
}
