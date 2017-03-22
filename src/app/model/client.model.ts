import {IModel} from './abstract.model';

export class Client implements IModel {
    id : number;
    name :string;
    firstname :string;
    lastname:string;
    email:string;
    tel:number;
}