import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeExampComponent } from './subscribe-examp.component';

describe('SubscribeExampComponent', () => {
  let component: SubscribeExampComponent;
  let fixture: ComponentFixture<SubscribeExampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeExampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
