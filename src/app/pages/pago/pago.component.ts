import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatRadioModule,} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
//import { DatosDeEnvio } from '../../model/DatosDeEnvio.model';
@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioModule,FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent implements OnInit {

  pagosForm!:FormGroup;

  constructor(private readonly fb:FormBuilder){}

  initForm():FormGroup{
     return this.fb.group({
        nombre:new FormControl ('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
        direccion:new FormControl ('',[Validators.required]),
        tipoDePago:new FormControl ('Transferencia',[]),
        cedula:new FormControl ('',[Validators.required]),
        telefono:new FormControl ('',[Validators.required]),
        correo:new FormControl ('',[Validators.required,Validators.email]),

      })
  }

  ngOnInit(): void {
      this.pagosForm=this.initForm();
  }
  onSubmit() {

    if (this.pagosForm?.valid) {
    //  const valForm:DatosDeEnvio=this.pagosForm.value;

    }
  }
}
