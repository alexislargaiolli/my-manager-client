import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutes } from './client.routing';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientBackendService } from './services/client.service';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutes
  ],
  declarations: [ClientComponent,
    ClientListComponent,
    ClientDetailComponent
  ],
  providers: [
    ClientBackendService
  ]
})
export class ClientModule { }