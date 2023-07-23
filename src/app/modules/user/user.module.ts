import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserLoginComponent, UserDetailComponent],
  imports: [UserRoutingModule, CommonModule, FormsModule, HttpClientModule],
})
export class UserModule {}
