import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  selectedClient:Client;

  constructor() { }

  ngOnInit() {
  }

  onSelectClient(client) {
    this.selectedClient = client;
  }

}