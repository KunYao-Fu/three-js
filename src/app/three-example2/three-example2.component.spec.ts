import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeExample2Component } from './three-example2.component';

describe('ThreeExample2Component', () => {
  let component: ThreeExample2Component;
  let fixture: ComponentFixture<ThreeExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeExample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
