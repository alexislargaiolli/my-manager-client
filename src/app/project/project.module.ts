import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/project.service';
import { ProjectComponent } from './project.component';
import { ProjectRoutes } from './project.routing';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectTaskComponent } from './project-detail/project-task/project-task.component';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutes
  ],
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectDetailComponent,
    ProjectTaskComponent
  ],
  providers: [
    ProjectService,
    TaskService
  ]
})
export class ProjectModule { }