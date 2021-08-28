import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9_]{4,}$')]),
  })
  submitForm(formdata: FormGroup) {
    console.log(formdata.value)
    this._AuthService.register(formdata.value).subscribe((response) => {
      if (response.message === "success") {
        this._Router.navigate(['/login'])
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
