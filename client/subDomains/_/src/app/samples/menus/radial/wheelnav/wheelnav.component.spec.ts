import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelnavComponent } from './wheelnav.component';

describe('WheelnavComponent', () => {
  let component: WheelnavComponent;
  let fixture: ComponentFixture<WheelnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
