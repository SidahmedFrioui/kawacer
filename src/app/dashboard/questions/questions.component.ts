import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questionData: any;

  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/questions/' + this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      console.log(data)
      this.questionData = data
    })
  }

}
