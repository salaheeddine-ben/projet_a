import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePComponent } from './People/home-p/home-p.component';
import { HomeAComponent } from './Animals/home-a/home-a.component';
import { SwiperModule } from 'swiper/angular';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePComponent,
    HomeAComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthRoutingModule,
    AuthModule,
    SwiperModule,
  ],
  exports:[
    AppComponent,
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
