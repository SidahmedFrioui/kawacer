import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  username: String,
  first_name: String,
  last_name: String,
  password: String,
  email: String,
  city: String,
  state: String,
  type: String,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  public userList: User;

  constructor(private http: HttpClient) { }

  getUsers():Observable <User> {
    return this.http.get<User>('http://localhost:3000/users', {});
  }

  ngOnInit(): void {
    this.getUsers().subscribe((data: any) => {
      this.userList = data;
    });
  }

}
