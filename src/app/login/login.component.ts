import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() username: string;
  @Input() password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef
  public submit() {
    // tslint:disable-next-line:triple-equals
    this.checkRequiredFields(this.username);
    this.checkRequiredFields(this.password);
    this.auth.login(this.username, this.password)
        .pipe(first())
        .subscribe(
          result => this.router.navigate(['/']),
          err => this.error = 'البريد الإلكتروني أو كلمة السر خاطئة'
        );
  }
  close() {
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  checkRequiredFields(input) {
    if (input === null) {
      this.error = 'error';
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/'])
    }
  }
}
