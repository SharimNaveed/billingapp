import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakebillComponent } from './makebill.component';

describe('MakebillComponent', () => {
  let component: MakebillComponent;
  let fixture: ComponentFixture<MakebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
