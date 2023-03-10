import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
