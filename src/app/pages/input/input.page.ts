import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage {

  nombre: string = 'Angie';
  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  
  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }
}
