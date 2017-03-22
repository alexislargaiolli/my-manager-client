import {IModel} from './abstract.model';

export class Task implements IModel{
    id : number;
    title :string;
    description :string;
    project:number;
}