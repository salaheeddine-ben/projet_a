import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {}
  
  onSubmit(f: NgForm) {
    const loginObserver = {
      next: (x: any) => {
        console.log('user logged in ')
      },
      error: (err: any) => console.log(err)
    };
    this.AuthService.login(f.value).subscribe(loginObserver);
  }

}
