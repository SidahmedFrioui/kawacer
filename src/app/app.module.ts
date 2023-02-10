import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';

import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { QuizComponent } from './quiz/quiz.component';
import { MainComponent } from './dashboard/main/main.component';
import { QuizesComponent } from './dashboard/quizes/quizes.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { QuestionsComponent } from './dashboard/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    DetailComponent,
    MyLoaderComponent,
    QuizComponent,
    MainComponent,
    QuizesComponent,
    UsersComponent,
    CategoriesComponent,
    MessagesComponent,
    DashComponent,
    AdminComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
