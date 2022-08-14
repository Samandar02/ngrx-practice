import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtCounterComponent } from './mt-counter.component';

describe('MtCounterComponent', () => {
  let component: MtCounterComponent;
  let fixture: ComponentFixture<MtCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
