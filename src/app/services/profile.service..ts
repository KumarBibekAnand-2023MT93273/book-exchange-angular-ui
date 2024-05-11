import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  getProfileByUserId(userId: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/profile/${userId}`);
  }

  saveProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.baseUrl}/profile`, profile);
  }
}
