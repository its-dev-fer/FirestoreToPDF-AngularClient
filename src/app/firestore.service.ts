import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
  )
  {

  }

  /**
   * Enviar los datos a Firestore
   *
   * @param   JSON  data  Estrutura que contiene [nombre, taller, correo, fecha]
   */
  send(data)
  {
    return this.firestore.collection('registros').add(data)
  }
}
