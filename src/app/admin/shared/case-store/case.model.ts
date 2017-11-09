import { Person } from '../person-store/person.model';
export interface Case {
    $key?: string;
    id: string;
    caseNumber: string;
    persons?: Person[];
    dateOfCase: string;
}