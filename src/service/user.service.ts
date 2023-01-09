
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
 
  constructor(private http: HttpClient)
  {

  }
//   addBadge(badge:BadgeViewModel): Observable<ApiResponse<boolean>>
//   {
//     return this.http.post<ApiResponse<boolean>>(this.addBadgePath,badge) ;

//   }
  



}
