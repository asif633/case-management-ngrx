import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Case } from './case.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
//import 'rxjs/Observable/combineLatest';
import { Person } from '../person-store/person.model';

@Injectable()
export class CaseService {
  cases: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.getAll();
  }
  async getAll() {
    console.log('gfr');
    let persons = [];

    //this.getPeros('-KyRzMbV26ktIqUqVkxM').do(vf => console.log('de', vf)).subscribe(vfr => console.log('bgt', vfr));
    this.cases = await this.db.list('cases').snapshotChanges().map(changes =>
      changes.map(c =>

        ({ $key: c.payload.key, ...c.payload.val() })));
    // .switchMap(css => css.map(v => 

  }
  getPeros(v) {
    return this.db.list('casePersons/' + v).snapshotChanges()
      .do(cc => console.log('vv', cc))
      .map(res => res.map(res1 => res1.payload.key))
      .map(lspc => lspc.map(lessonKey => this.db.object('persons/' + lessonKey).snapshotChanges().map(xs => ({ $key: xs.payload.key, ...xs.payload.val() }))))
      .mergeMap(fbojs => Observable.combineLatest(fbojs))
      ;//.subscribe(xx => console.log('xsw',xx))
  }
  add(casev: Case) {
    return this.db.list('cases').push(casev);
  }
  update(casev: Case) {
    return this.db.list('cases').update(casev.$key, { caseNumber: casev.caseNumber, dateOfCase: casev.dateOfCase });
  }
  delete(caseKey: string) {
    return this.db.list(`cases`).remove(caseKey);
  }
  getCase(caseKey: string): Observable<Case> {
    return this.db.object(`cases/${caseKey}`).snapshotChanges().map(c =>
      ({ $key: c.payload.key, ...c.payload.val() }));
  }
  addCasePersons(caseKey: string, personkey: string) {
    this.db.object(`casePersons/${caseKey}/${personkey}`).set(true);
  }
}
