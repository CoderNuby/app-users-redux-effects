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

  getUsers(page: number = 1): Observable<UserModel[]> {
    return this.http.get(`${this.apiURL}/users?page=${page}`).pipe(map((res: any) => {
      return res['data'];
    }));
  }
}
