import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  { path: '', component: ClientComponent }
];

export const ClientRoutes = RouterModule.forChild(routes);
