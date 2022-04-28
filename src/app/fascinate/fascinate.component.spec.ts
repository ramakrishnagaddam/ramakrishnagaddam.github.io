import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FascinateComponent } from './fascinate.component';

describe('FascinateComponent', () => {
  let component: FascinateComponent;
  let fixture: ComponentFixture<FascinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FascinateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FascinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
