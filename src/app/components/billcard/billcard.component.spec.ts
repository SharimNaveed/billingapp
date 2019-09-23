import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcardComponent } from './billcard.component';

describe('BillcardComponent', () => {
  let component: BillcardComponent;
  let fixture: ComponentFixture<BillcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
