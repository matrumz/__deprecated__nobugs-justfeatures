import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2FanMenuComponent } from './ng2-fan-menu.component';

describe('Ng2FanMenuComponent', () => {
  let component: Ng2FanMenuComponent;
  let fixture: ComponentFixture<Ng2FanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2FanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2FanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
