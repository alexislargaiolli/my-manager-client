
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { List } from 'immutable';
import { BehaviorSubject } from "rxjs/Rx";
import { Project } from '../../model/project.model';
import { ProjectService } from './project.service';
import { UiStateStore } from '../../state/ui-state.store';

@Injectable()
export class ProjectStore {

    private _projects: BehaviorSubject<List<Project>> = new BehaviorSubject(List([]));

    constructor(private projectService: ProjectService, private uiStateStore: UiStateStore) {
        this.loadInitialData();
    }

    get projects(): Observable<List<Project>> {
        return this._projects.asObservable();
    }

    loadInitialData() {
        this.projectService.getAll()
            .subscribe(
            projects => {
                return this._projects.next(List(projects));
            },
            err => console.log("Error retrieving Todos")
            );
    }

    createProject(newProject: Project, updateAppState: Boolean = false): Observable<Project> {

        if (updateAppState) {
            this.uiStateStore.startBackendAction("Creating project...");
        }

        let obs = this.projectService.create(newProject);

        obs.subscribe(
            res => {
                this._projects.next(this._projects.getValue().push(newProject));
            },
            err => { },
            () => {
                if (updateAppState) {
                    this.uiStateStore.endBackendAction();
                }
            });

        return obs;
    }

    deleteProject(deleted: Project, updateAppState: Boolean = false): Observable<Project> {
        if (updateAppState) {
            this.uiStateStore.startBackendAction("Deleting project...");
        }

        let obs = this.projectService.delete(deleted);
        obs.subscribe(
            res => {
                let projects: List<Project> = this._projects.getValue();
                let index = projects.findIndex((project) => project.id === deleted.id);
                this._projects.next(projects.delete(index));
            },
            err => { },
            () => {
                if (updateAppState) {
                    this.uiStateStore.endBackendAction();
                }
            }
        );
        return obs;
    }
}
