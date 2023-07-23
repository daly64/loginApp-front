import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  goBack() {
    this.router.navigate([''], { relativeTo: this.activeRoute.parent });
  }
}
