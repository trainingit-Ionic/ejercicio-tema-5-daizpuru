import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restricted-home',
  templateUrl: './restricted-home.page.html',
  styleUrls: ['./restricted-home.page.scss'],
})
export class RestrictedHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
