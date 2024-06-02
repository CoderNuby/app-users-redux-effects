import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getUsers(page: number, per_page: number): Observable<UserModel[]> {
    return this.http.get(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`).pipe(map((res: any) => {
      return res['data'];
    }));
  }

  getUserSize(): Observable<number>{
    return this.http.get(`${this.apiURL}/users`).pipe(map((res: any) => {
      return res['total'];
    }));
  }
}
