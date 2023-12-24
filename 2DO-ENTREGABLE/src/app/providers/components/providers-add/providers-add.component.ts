import { Component, OnInit } from '@angular/core';
import { Provider } from '../../../models/Provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-providers-add',
  templateUrl: './providers-add.component.html',
  styleUrl: './providers-add.component.css'
})
export class ProvidersAddComponent implements OnInit{
onSubmit() {
throw new Error('Method not implemented.');
}

  newProvider: Provider= {
    id:undefined,
    compName:undefined,
    item:undefined,
    webSite:undefined,
    phone:undefined,
    email:undefined,
    address:{
        street:undefined,
        number:undefined,
        zip:undefined,
        country:undefined,
        province:undefined,
        locality:undefined
    },
    taxData:{
        cuit:undefined,
        iva:undefined
    },
    logo:undefined,
    contact:{
        name:undefined,
        phone:undefined,
        email:undefined,
        role:undefined
    }
};
  ngOnInit(): void {
    
  }

  myFormReactivo: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myFormReactivo = this.fb.group({
      proveedor: ['', [Validators.required, Validators.minLength(5)]],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      correo: ['', [Validators.required, Validators.email]],
      cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
      producto: ['', [Validators.required, Validators.maxLength(15)]]
    });
  }

}
