import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientBackendService } from '../services/client.service';
import { Client } from '../../model/client.model';


@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  @Output() clientSelect = new EventEmitter();

  constructor(private clientService: ClientBackendService) { }

  public ngOnInit() {
    this.loadClients();
  }

  private loadClients() {
    this.clientService.getAll()
      .subscribe(clients => this.clients = clients,
      err => {
        console.log(err);
      });
  }

  public selectClient(client: Client) {
    this.clientSelect.emit(client);
  }

}
