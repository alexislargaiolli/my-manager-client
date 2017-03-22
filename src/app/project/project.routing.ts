import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: ':projectId', component: ProjectDetailComponent }
];

export const ProjectRoutes = RouterModule.forChild(routes);
