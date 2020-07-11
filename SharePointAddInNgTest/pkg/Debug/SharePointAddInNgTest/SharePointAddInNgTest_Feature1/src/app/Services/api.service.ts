import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SharepointService } from '../Services/sharepoint.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private sharepointService: SharepointService
  ) {}

  // const url = "https://99xtech.sharepoint.com/sites/spec-dev/experiment/";

  getTodos() {
    const listUrl = "/_api/Web/Lists/getByTitle('Todos')";
    let url = this.sharepointService.getappUrl() + listUrl + `/Items?`;
    url = this.sharepointService.targetUrl(url);
    const header = new HttpHeaders();
    header.set('Accept', 'application/json;odata=verbose');
    return this.http.get(url, { headers: header });
  }

  sendTodos(data: any): Observable<any> {
    const listUrl = "/_api/Web/Lists/getByTitle('Todos')";
    let url = this.sharepointService.getappUrl() + listUrl + `/Items?`;
    url = this.sharepointService.targetUrl(url);
    const header = new HttpHeaders();
    header.set('Accept', 'application/json;odata=verbose');
    return this.http.post<any>(url, data, { headers: header });
  }
}
