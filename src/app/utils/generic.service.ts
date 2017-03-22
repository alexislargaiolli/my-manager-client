import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Project } from "../../model/project.model";
import { Observable } from "rxjs/Observable";
import { IModel } from '../model/abstract.model';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class GenericService<T extends IModel> {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(protected http: Http) { }

    abstract getApiURL(): string;

    public getAll(): Observable<T[]> {
        return this.http.get(this.getApiURL())
            .map((res: Response) => res.json().data)
            .catch(this.handleError)
    }

    public get(id:number):Observable<T>{
        return this.http.get(`${this.getApiURL()}/${id}`)
        .map((res:Response)=> res.json().data)
        .catch(this.handleError)
    }

    public create(body: Object): Observable<T> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.getApiURL(), body, options)
            .map((res: Response) => res.json().data)
            .catch(this.handleError)
    }

    public delete(eltToDelete: T): Observable<T> {
        let options = new RequestOptions({ headers: this.headers });
        return this.http.delete(`${this.getApiURL()}/${eltToDelete.id}`, options)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    protected handleError(error:any){
        return Observable.throw(error.json().error || 'Server error');
    }
}