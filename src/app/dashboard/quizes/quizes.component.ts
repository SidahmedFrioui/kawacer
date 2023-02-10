import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  public quizList: any;

  constructor(private http: HttpClient) { }
  
  getQuizes():Observable <any> {
    return this.http.get('http://localhost:3000/quizes/', {})
  }

  ngOnInit(): void {
    this.getQuizes().subscribe((data) => {
      this.quizList = data
    })
  }

}
