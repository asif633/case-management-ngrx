import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Person } from './person.model';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {
  projects: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.projects = this.db.list('/persons').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });
  }
  add(person: Person) {
    return this.db.list('persons').push(person);
  }
  update(person: Person) {
    return this.db.list('persons').update(person.$key, {name: person.name, age: person.age, profession: person.profession});
  }
  delete(personKey: string) {
    return this.db.list(`persons`).remove(personKey);
  }
  getPerson(personKey: string): Observable<Person> {
    return this.db.object(`persons/${personKey}`).valueChanges();
  }
}
