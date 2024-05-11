import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly loggedInKey = 'isLoggedIn';
  private loggedInUser: any;

  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, userData);
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
  
  getProfileByUserId(userId: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/profile/${userId}`);
  }


  get isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }

  setIsLoggedIn(value: boolean): void {
    localStorage.setItem(this.loggedInKey, value ? 'true' : 'false'); // Update local storage
  }

  setLoggedInUser(user: string) {
    console.log("set loggedin user",user);
    this.loggedInUser = user;
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  logout(): void {
    localStorage.removeItem(this.loggedInKey); // Clear login status
  }
}
