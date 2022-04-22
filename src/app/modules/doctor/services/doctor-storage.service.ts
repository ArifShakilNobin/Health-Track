import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { applicationUrls } from 'src/app/shared/application-constants/application-urls.const';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorStorageService {
  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${applicationUrls.user.user}`);
  }
}
