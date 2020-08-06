import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit(form): void {
    console.log('onSubmit lanzado');
    console.log(this.usuario);
    form.reset();
  }
}
