import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoCardsComponent } from './reco-cards.component';

describe('RecoCardsComponent', () => {
  let component: RecoCardsComponent;
  let fixture: ComponentFixture<RecoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
