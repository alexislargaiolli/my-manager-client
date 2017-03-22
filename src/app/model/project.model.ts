import { List, Record } from 'immutable';
import {IModel} from './abstract.model';

export class Project implements IModel {
    id: number;
    name: string;
    description : string;
    creationDate : Date;
    plannedStartDate : Date;
    startDate : Date;
    plannedEndDate : Date;
    endDate : Date;
}