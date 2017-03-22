import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/project.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService    
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.projectService.get(+params['projectId']))
      .subscribe((project: Project) => {
        this.project = project;
      })
  }

}