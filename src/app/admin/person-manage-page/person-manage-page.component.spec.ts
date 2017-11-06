import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonManagePageComponent } from './person-manage-page.component';

describe('PersonManagePageComponent', () => {
  let component: PersonManagePageComponent;
  let fixture: ComponentFixture<PersonManagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonManagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonManagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
