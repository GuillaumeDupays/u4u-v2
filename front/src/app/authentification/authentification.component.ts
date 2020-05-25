import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  user: User = { username:'', password: ''};

  constructor() { }

  ngOnInit(): void {
  }

  accesLogin() {
  }
}
