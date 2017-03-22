import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../model/project.model';
import { ProjectService } from '../services/project.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  public createForm = this.fb.group({
    name : ["", Validators.required]  
  });

  constructor(private projectService: ProjectService, public fb: FormBuilder, private router:Router) { 
    
  }

  ngOnInit() {
    
  }

  public submitForm(event) {
    this.projectService.create(this.createForm.value).subscribe(project=>this.router.navigate(['/project', project.id]));
  }

}