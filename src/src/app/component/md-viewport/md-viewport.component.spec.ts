import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdViewportComponent } from './md-viewport.component';

describe('MdViewportComponent', () => {
  let component: MdViewportComponent;
  let fixture: ComponentFixture<MdViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
