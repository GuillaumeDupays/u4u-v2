import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl ='http://usforyou.net:3000/api/v1/contacts';
  // selectedContact: Contact;

/*  'http://vps815314.ovh.net:3000/api/v1/contacts'
'http://vps815314.ovh.net//var/www/angular/usForYou/back/api/v1/contacts';*/

/*  Usforyou@vps815314.ovh.net -p 2270*/

   private contactCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  creerUnContact(contact: Contact) {
    return this.httpClient.post<Contact>(this.baseUrl, contact);
  }

  uploadCV(formData: FormData) {
    return this.httpClient.post<any>(`${this.baseUrl}/cv`, formData);
  }

  dispatchContactCreated(id: string) {
    this.contactCreated.next(id);
  }

  handleContactCreated() {
    return this.contactCreated.asObservable();
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/`);
  }

  getContactById(id: string): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}/${id}`);
  }

  updateContact(id: string, contact: Contact) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, contact);
  }

  deleteSingleContact(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  deleteContacts(ids: string[]) {
    const allIds = ids.join(',');
    return this.httpClient.delete(`${this.baseUrl}/?ids=${allIds}`);
  }

}
