import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GenericService } from '../../utils/generic.service';
import { Project } from "../../model/project.model";


@Injectable()
export class ProjectService extends GenericService<Project> {

    constructor(protected http: Http) {
        super(http)
     }

    getApiURL() : string{
        return "/api/projects";
    }
}