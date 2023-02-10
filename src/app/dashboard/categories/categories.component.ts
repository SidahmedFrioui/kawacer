import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList: any;

  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/categories/', {}).subscribe((data: any) => {
      console.log(data)
      this.categoriesList = data
    });
  }

}
