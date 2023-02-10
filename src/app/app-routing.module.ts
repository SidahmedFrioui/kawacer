import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent} from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { QuizComponent} from './quiz/quiz.component';
import { MainComponent } from './dashboard/main/main.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { QuizesComponent } from './dashboard/quizes/quizes.component';
import { UsersComponent } from './dashboard/users/users.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { QuestionsComponent } from './dashboard/questions/questions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'quizes/:id', component: DetailComponent},
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'question/:id', component: QuizComponent },
  { path: 'dashboard', component:  MainComponent, children:[
    { path: 'main', component: DashComponent },
    { path: 'quizes', component: QuizesComponent },
    { path: 'users', component: UsersComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'questions/:id', component: QuestionsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
