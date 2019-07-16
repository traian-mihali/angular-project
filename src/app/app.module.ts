import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TitleCasePipe } from './title-case.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { StarComponent } from './star/star.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FollowersComponent } from './followers/followers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LogUpdateService } from './services/log-update.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    StarComponent,
    TitleCasePipe,
    InputComponent,
    CardComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    FollowersComponent,
    NotFoundComponent,
    NavbarComponent,
    GithubProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    FollowersService,
    LogUpdateService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
