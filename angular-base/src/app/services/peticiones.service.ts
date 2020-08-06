import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = 'https://reqres.in/';
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.url + 'api/users/' + id);
  }

  addUser(user): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.http.post(this.url + 'api/users', params, {headers});
  }
}
