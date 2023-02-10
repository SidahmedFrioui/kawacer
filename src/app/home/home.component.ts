import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty, Observable } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categoryList:any
  public quizList:any
  public quiz:any

  public isEmpty:string
  public searchQuery: string;

  constructor(private http: HttpClient, private router: Router) { }


  getQuizes():Observable <any> {
    return this.http.get('http://localhost:3000/quizes/', {})
  }

  submit() {
    this.http.get('http://localhost:3000/quizes/quiz/' + this.searchQuery, {}).subscribe((data) => {
      this.quizList = data
      if(this.quizList === undefined || this.quizList.length == 0) {
        this.isEmpty = '(0) نتائج البحث '
      }
    })
  }

  getPaid() {
    this.http.get('http://localhost:3000/quizes/paid', {}).subscribe((data) => {
      this.quizList = data
      this.isEmpty = ' '
    })
  }

  getFree() {
    this.http.get('http://localhost:3000/quizes/free', {}).subscribe((data) => {
      this.quizList = data
      this.isEmpty = ' '
    })
  }

  getCategoryList():Observable <any> {
    return this.http.get('http://localhost:3000/categories', {})
  }

  // tslint:disable-next-line:typedef
  getQuiz(id: String) {
    return this.http.get('http://localhost:3000/quizes/' + id, {}).subscribe((data) => {
      console.log(data)
      this.quiz = data;
    })
  }

  ngOnInit(): void {
    this.router.navigate(['/home']);
    this.getQuizes().subscribe((data) => {
      this.quizList = data
    })
  }

}
