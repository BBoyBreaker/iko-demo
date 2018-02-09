import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpubCardComponent } from './epub-card.component';

describe('EpubCardComponent', () => {
  let component: EpubCardComponent;
  let fixture: ComponentFixture<EpubCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpubCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
