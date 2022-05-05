import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private readonly _webApiUrl = 'https://localhost:7193/';

  constructor(private _http: HttpClient) {}
}
