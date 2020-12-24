import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(url);
  }

  getLocalData(key: string): string | null {
    return localStorage.getItem(key);
  }

  setLocalData(key: string, value: any): void {
    if (typeof (value) !== 'string') {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }
    localStorage.setItem(key, value);
  }

}
