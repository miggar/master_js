import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  testService(): string {
    return 'Probando el servicio de Angular';
  }

  saveProject(project: Project): Observable<any> {
    const params = JSON.stringify(project);
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post(this.url + 'save-project', params, { headers });
  }

  getProjects(): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.get(this.url + 'projects', { headers });
  }

  getProject(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.get(this.url + 'project/' + id, { headers });
  }
}
