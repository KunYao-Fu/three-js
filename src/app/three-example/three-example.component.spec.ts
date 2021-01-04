import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeExampleComponent } from './three-example.component';

describe('ThreeExampleComponent', () => {
  let component: ThreeExampleComponent;
  let fixture: ComponentFixture<ThreeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
