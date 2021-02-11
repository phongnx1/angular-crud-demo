import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseURL}/all`);
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(`${environment.baseURL}`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.httpClient.put(`${environment.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.baseURL}/${id}`);
  }
}
