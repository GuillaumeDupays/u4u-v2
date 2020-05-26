import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from "@angular/forms";
import {ContactService} from "../../services/contact.service";




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

creationForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      civ: '',
      nom: '',
      prenom: '',
      email: '',
      phone: '',
      dispoDate: '',
      poste: '',
      contrat: '',
      pretention: '',
      msg: '',
      cv: '',
      conditionsUtilisation: '',
    })
  }

  createContact(formDirective: FormGroupDirective) {
    if (this.creationForm.valid) {
      console.log(this.creationForm);
      this.contactService
        .creerUnContact(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error));
    }
  }

  handleSuccess(data, formDirective) {
    console.log('OK handleSuccess - contact créé', data);
    this.creationForm.reset();
    formDirective.resetForm();
    this.contactService.dispatchContactCreated(data._id);
  }

  handleError(error) {
    console.log('KO handleError - contact pas créé', error);
  }

}
