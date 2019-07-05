import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { FirestoreService } from './firestore.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TallerCloudFunction';

  registerForm: FormGroup

  constructor
  (
    private formBuilder:FormBuilder,
    private firestore: FirestoreService
  )
  {
    this.registerForm = this.formBuilder.group({
      'nombre': ['', Validators.required],
      'correo': ['', Validators.required],
      'taller': ['', Validators.required],
      'fecha': ['', Validators.required],
    })
  }


  sendToFirestore()
  {
    const data = {
      name: this.registerForm.get('nombre').value,
      email: this.registerForm.get('correo').value,
      taller: this.registerForm.get('taller').value,
      fecha: this.registerForm.get('fecha').value
    }

    this.firestore.send(data).then((result) => {
      console.log(result)
      // swal("Registro exitoso!", "Te enviaremos tus datos en un correo", "success")
      Swal.fire({
        title: 'Registro exitoso!',
        text: 'Se te enviarán tus datos al correo proporcionado',
        type: 'success',
        confirmButtonText: 'Entendido'
      })
    })
    .catch(err => {
      console.error(err)
    })

  }
}
