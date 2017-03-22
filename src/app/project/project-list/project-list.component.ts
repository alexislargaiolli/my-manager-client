import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../../model/project.model';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Observable<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getAll();
  }

}