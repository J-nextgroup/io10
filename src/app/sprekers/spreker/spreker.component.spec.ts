import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprekerComponent } from './spreker.component';

describe('SprekerComponent', () => {
  let component: SprekerComponent;
  let fixture: ComponentFixture<SprekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
