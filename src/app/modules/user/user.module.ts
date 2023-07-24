import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [UserLoginComponent, UserDetailComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
   
  ],
})
export class UserModule {}
