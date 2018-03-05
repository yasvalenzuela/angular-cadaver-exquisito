import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-verso-form',
  templateUrl: './verso-form.component.html',
  styleUrls: ['./verso-form.component.css']
})
export class VersoFormComponent implements OnInit {
  versoForm = new FormGroup({
    jugador : new FormControl(),
    contenido : new FormControl()
  })


//orientacion a objetos
  constructor(private fb:FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {

  }
}
