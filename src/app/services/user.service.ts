import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from '../users/list-users/list-users.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

   baseUrl : string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers():Observable<User[]>{
   return this.http.get<User[]>(this.baseUrl + 'users');
  }

  viewUsers(id : string) {
    return this.http.get(this.baseUrl + 'users/' +id);
   }

   addUser(userobj : any){
     return this.http.post(this.baseUrl + 'users', userobj);
    }

    deleteUser(id : string){
      return this.http.delete(this.baseUrl + 'users/' +id);
    }
    updateUser(id : string, userobj : any){
      return this.http.put(this.baseUrl + 'users/' +id, userobj);
    }
}

