import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/kech-webapp-library/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.auth.getDataFromServer(username, password).subscribe(data =>{
      if(data){
        console.log('if')
        this.auth.setLoggedIn(true)
        this.router.navigate(['admin'])
      }
      else{
        this.auth.setLoggedIn(false)
        window.alert('incorect username or password')
        console.log('else')
      }
      console.log(data)
    })
    // console.log(this.Auth.getUserDetails(username, password))
    console.log(event)
  }
}
