import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "https://reqres.in/api";
  delay: number = 3;

  constructor(private http: HttpClient) { }

  getUsers(page: number, per_page: number) {
    return this.http.get(`${this.apiURL}/users?page=${page}&per_page=${per_page}&delay=${this.delay}`).pipe(
      map((res: any) => res['data'])
    );
  }

  getUserById(id: number){
    return this.http.get(`${this.apiURL}/users/${id}?delay=${this.delay}`).pipe(map((res: any) => {
      return res["data"];
    }));
  }

  getUsersSize(): Observable<number>{
    return this.http.get(`${this.apiURL}/users`).pipe(map((res: any) => {
      return res['total'];
    }));
  }
}
