import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedUserComponent } from './unverified-user.component';

describe('UnverifiedUserComponent', () => {
  let component: UnverifiedUserComponent;
  let fixture: ComponentFixture<UnverifiedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifiedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
