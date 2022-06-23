import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
   constructor(private http: HttpClient) { }
 getUsuarios() {
    return this.http.get<any>("http://app.test/api/users" );
  }


}
