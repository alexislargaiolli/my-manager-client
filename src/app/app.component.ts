/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { UiStateStore } from './state/ui-state.store';
import { UiState } from './state/ui-state';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <div class="container-fluid">   
    <nav class="navbar navbar-toggleable-sm navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#" [routerLink]=" ['./'] " >Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">          
          <a class="nav-item nav-link" [routerLink]=" ['./project'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Project
          </a>
          <a class="nav-item nav-link" [routerLink]=" ['./client'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Client
          </a>
          <a class="nav-item nav-link" [routerLink]=" ['./about'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            About
          </a>
        </div>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
        <p>{{uiStateMessage | async}}</p>
    </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    private uiStateStore: UiStateStore
  ) { }

  public ngOnInit() {

  }

  get uiStateMessage() {
    return this.uiStateStore.uiState.map((uiState: UiState) => uiState.message);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
