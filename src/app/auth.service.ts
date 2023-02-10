import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public currentUser: any;

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string, user: any}>('http://localhost:3000/auth', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('user', JSON.stringify(result.user));
          return true;
        })
      );
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  public get user(): any {
    return (JSON.parse(localStorage.getItem('user')));
  }

  public isAdmin(): boolean {
    if(JSON.parse(localStorage.getItem('user')).type === 'admin') {
      return true
    } else {
      return false
    }
  }
}
