import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Client } from "../../model/client.model";
import { Observable } from "rxjs/Observable";
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ClientBackendService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiURL = "/api/clients";

    constructor(private http: Http) { }

    public getAll(): Observable<Client[]> {
        return this.http.get(this.apiURL)
            .map((res: Response) => res.json().data)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // get(id : number) {
    //     const url = `${this.apiURL}/${id}`;
    //     return this.http.get(url);
    // }

    // save(client: Client) : Observable<Client[]> {
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json; charset=utf-8');

    //     return this.http.post('/todo', JSON.stringify(client),{headers}).share();
    // }

    // delete(deletedTodo: Client) {
    //     let params = new URLSearchParams();
    //     params.append('id', '' + deletedTodo.id );

    //     return this.http.delete('/todo', {search: params}).share();
    // }


    // toggle(toggled: Client) {
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json; charset=utf-8');
    //     return this.http.put('/todo', JSON.stringify(toggled.toJS()),{headers}).share();
    // }

}