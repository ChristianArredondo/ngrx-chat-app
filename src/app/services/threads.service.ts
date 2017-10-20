import { HttpClient } from '@angular/common/http';
import { AllUserData } from '../../../shared/to/all-user-data';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads () {
    return this.http.get<AllUserData>('/api/threads');
  }

}
