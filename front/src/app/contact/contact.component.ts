import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../models/contact";
import {ContactService} from "../services/contact.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  postContact$: Observable<Contact[]>;
  getEtat$
  etat$ : number = 0;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.postContact$ = this.contactService.getContacts();
  }

  nextEtat() {
    this.etat$+=10;
  }

  pastEtat() {
    this.etat$-=10;
  }

  getEtat() {

  }

}
