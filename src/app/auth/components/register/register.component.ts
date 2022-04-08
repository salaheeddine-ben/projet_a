import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {

    const registerObserver = {
      next: (x: any) => console.log('user created '),
      error: (err: any) => console.log(err)
    };

    this.AuthService.register(f.value).subscribe(registerObserver);

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
