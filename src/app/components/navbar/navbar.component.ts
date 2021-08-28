import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  user: string = '';
  constructor(private _AuthService: AuthService) {
    this._AuthService.currentUserData.subscribe(() => {
      if (_AuthService.currentUserData.getValue() == null) {
        this.isLogin = false;
      }
      else {
        this.isLogin = true;
        this.user = this._AuthService.currentUserData.value.first_name;
      }
    })
  }
  logout() {
    this._AuthService.logout();
  }

  ngOnInit(): void {
  }

}
