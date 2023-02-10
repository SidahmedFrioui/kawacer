import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public quizData:any
  public questions:any

  constructor( private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }
  // tslint:disable-next-line:typedef
  close() {
    this.router.navigate(['/'])
  }

  // tslint:disable-next-line:typedef
  startQuiz() {
    this.router.navigate(['/quiz/' + this.quizData.id])
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/quizes/' + this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
      this.http.get('http://localhost:3000/questions/' + data._id).subscribe((qdata: any) => {
        console.log(data)
        this.quizData = data
        this.questions = qdata;
      })
    })
  }

}
