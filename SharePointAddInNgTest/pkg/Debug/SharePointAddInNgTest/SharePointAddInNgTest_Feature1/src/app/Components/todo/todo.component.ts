import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { element } from 'protractor';
import { FormsModule } from '@angular/forms';
import { Todo } from './../../models/todo.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { SharepointService } from './../../Services/sharepoint.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: any[] = [];
  formValue: String = '';
  todoValue = '';
  checkId = 0;

  constructor(
    private apiServices: ApiService,
    private httpClient: HttpClient,
    private sharepointService: SharepointService
  ) {}

  ngOnInit(): void {
    this.retreiveTodos();
  }

  retreiveTodos(): void {
    this.apiServices
      .getTodos()
      .toPromise()
      .then((res: any) => {
        res.value.forEach((element: any) => {
          //  console.log(element);
          this.todoList.push(element);
        });
      });
    console.log(this.todoList);
  }

  onSave(data) {
    const listUrl = `/_api/Web/Lists/getByTitle('Todos')`;

    let url = this.sharepointService.getappUrl() + listUrl + `/Items?`;
    url = this.sharepointService.targetUrl(url);

    const h = new HttpHeaders({
      Accept: 'application/json;odata=verbose',
    });
    this.httpClient
      .post(
        `${this.sharepointService.getappUrl()}/_api/contextinfo`,
        {},
        { headers: h }
      )
      .toPromise()
      .then((res: any) => {
        const dig = res.d.GetContextWebInformation.FormDigestValue;
        console.log(dig, 'Digest valuee');

        console.log(data.todo);
        const obj: any = new Todo(data.todo + '', 1, 'Done');
        console.log(obj);
        const body = {
          __metadata: { type: 'SP.Data.TodosListItem' },
          ...obj,
        };

        const headers = new HttpHeaders({
          Accpet: 'application/json;odata=verbose',
          'content-type': 'application/json;odata=verbose',
          'X-RequestDigest': dig,
        });

        const option = { headers };
        this.httpClient
          .post(url, JSON.stringify(body), {
            headers: headers,
            observe: 'response',
          })
          .subscribe((r) => {
            console.log(r, 'success');
          });
      });
  }

  getClickData(data): void {
    console.log(data);
    this.todoValue = data.Title;
    this.checkId = data.Id;
  }

  onDeleteTodo(data) {
    console.log(data);
    if (this.checkId > 0) {
      console.log('update');
      const listUrl = `/_api/Web/Lists/getByTitle('Todos')`;
      //  console.log(data.todo);
      let url =
        this.sharepointService.getappUrl() +
        listUrl +
        `/Items('${this.checkId}')?`;
      url = this.sharepointService.targetUrl(url);

      const h = new HttpHeaders({
        Accept: 'application/json;odata=verbose',
      });

      this.httpClient
        .post(
          `${this.sharepointService.getappUrl()}/_api/contextinfo`,
          {},
          { headers: h }
        )
        .toPromise()
        .then((res: any) => {
          const dig = res.d.GetContextWebInformation.FormDigestValue;
          console.log(dig, 'Digest valuee');

          console.log(data.todo);
          const obj: any = new Todo(data.todo + '', 1, 'Done');
          console.log(obj);
          const body = {
            __metadata: { type: 'SP.Data.TodosListItem' },
            ...obj,
          };

          const headers = new HttpHeaders({
            Accpet: 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': dig,
            'IF-MATCH': '*',
            'X-HTTP-Method': 'DELETE',
          });

          const option = { headers };
          this.httpClient
            .post(url, JSON.stringify(body), {
              headers: headers,
              observe: 'response',
            })
            .subscribe((r) => {
              console.log(r, 'success');
            });
        });
    } else {
      console.log('cannot delete');
    }
  }
  onUpdateTodo(data) {
    console.log(data);
    if (this.checkId > 0) {
      console.log('update');
      const listUrl = `/_api/Web/Lists/getByTitle('Todos')`;
      //  console.log(data.todo);
      let url =
        this.sharepointService.getappUrl() +
        listUrl +
        `/Items('${this.checkId}')?`;
      url = this.sharepointService.targetUrl(url);

      const h = new HttpHeaders({
        Accept: 'application/json;odata=verbose',
      });

      this.httpClient
        .post(
          `${this.sharepointService.getappUrl()}/_api/contextinfo`,
          {},
          { headers: h }
        )
        .toPromise()
        .then((res: any) => {
          const dig = res.d.GetContextWebInformation.FormDigestValue;
          console.log(dig, 'Digest valuee');

          console.log(data.todo);
          const obj: any = new Todo(data.todo + '', 1, 'Done');
          console.log(obj);
          const body = {
            __metadata: { type: 'SP.Data.TodosListItem' },
            ...obj,
          };

          const headers = new HttpHeaders({
            Accpet: 'application/json;odata=verbose',
            'content-type': 'application/json;odata=verbose',
            'X-RequestDigest': dig,
            'IF-MATCH': '*',
            'X-HTTP-Method': 'MERGE',
          });

          const option = { headers };
          this.httpClient
            .post(url, JSON.stringify(body), {
              headers: headers,
              observe: 'response',
            })
            .subscribe((r) => {
              console.log(r, 'success');
            });
        });
    } else {
      console.log('cannot update');
    }
  }
}
