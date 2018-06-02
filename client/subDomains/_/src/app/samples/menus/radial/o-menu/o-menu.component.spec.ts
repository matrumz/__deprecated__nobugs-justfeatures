import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OMenuComponent } from './o-menu.component';

describe('OMenuComponent', () => {
  let component: OMenuComponent;
  let fixture: ComponentFixture<OMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
