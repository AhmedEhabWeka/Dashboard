import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9_]{4,}$')]),
  })

  submitForm(formdata: FormGroup) {
    console.log(formdata)
    this._AuthService.login(formdata.value).subscribe((response) => {
      if (response.message === "success") {
        localStorage.setItem('currentUser', response.token);
        this._Router.navigate(['/home']);
        this._AuthService.saveCurrentUserData();

      }
      else {
        this.error = response.message
        console.log(response)
      }
    })
  }

  ngOnInit(): void {
  }

}
