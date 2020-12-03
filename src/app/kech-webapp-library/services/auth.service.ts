import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus =  false
  
  constructor(private http: HttpClient) { }

  getloggedIn(){
    return this.loggedInStatus;
  }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  getUserDetails(username : string, password : string){
    if(username == 'admin' && password == 'admin' ){
      this.loggedInStatus = true;
      return {'success' : true}
    }
    this.loggedInStatus = false;
    return {'success' : false}
    
  }

  getDataFromServer(username : string, password : string){
    return this.http.get<any>(`http://localhost:8080/api/auth?userName=${username}&password=${password}`)
  }

}
