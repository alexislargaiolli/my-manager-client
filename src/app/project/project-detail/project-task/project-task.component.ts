import { Component, OnInit, Inject, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Project } from './../../../model/project.model';
import { Task } from './../../../model/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit {

  tasks:Task[];
  projectId:number;

  constructor(private taskService:TaskService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {      
      this.projectId = params['projectId'];
      this.loadTask();
    });
  }

  loadTask(){
    this.taskService.getProjectTasks(this.projectId).subscribe(tasks=>{
      this.tasks = tasks;
    });
  }

  createTask(form: NgForm){
    const task = form.value;
    task.project = this.projectId;
    this.taskService.create(task).subscribe(task=>{
      form.reset();
      this.tasks.push(task);
    });
  }

  deleteTask(taskToDelete:Task){
    this.taskService.delete(taskToDelete).subscribe(res=>{
      this.tasks.splice(this.tasks.findIndex((task) => task.id === taskToDelete.id), 1);
    });
  }

}