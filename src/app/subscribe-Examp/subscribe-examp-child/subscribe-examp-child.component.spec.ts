import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeExampChildComponent } from './subscribe-examp-child.component';

describe('SubscribeExampChildComponent', () => {
  let component: SubscribeExampChildComponent;
  let fixture: ComponentFixture<SubscribeExampChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeExampChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeExampChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
