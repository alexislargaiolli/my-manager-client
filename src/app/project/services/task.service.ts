import { Project } from './../../model/project.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GenericService } from '../../utils/generic.service';
import { Task } from '../../model/task.model';

@Injectable()
export class TaskService extends GenericService<Task> {

    constructor(protected http: Http) {
        super(http)
    }

    getApiURL(): string {
        return "/api/tasks";
    }

    public getProjectTasks(projectId:number):Observable<Task[]>{
        const url = `${this.getApiURL()}?project=${projectId}`;        
        return this.http.get(url)
        .map((res:Response)=> res.json().data)
        .catch(this.handleError);
    }

}