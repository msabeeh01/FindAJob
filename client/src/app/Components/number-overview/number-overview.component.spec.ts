import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOverviewComponent } from './number-overview.component';

describe('NumberOverviewComponent', () => {
  let component: NumberOverviewComponent;
  let fixture: ComponentFixture<NumberOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
