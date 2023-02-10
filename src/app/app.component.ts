import {Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user: any;
  constructor(public auth: AuthService, private router: Router) {}

  title = 'kawacer';
  // tslint:disable-next-line:typedef
  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }


  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit()
  {
    this.user = this.auth.user;
  }
}
