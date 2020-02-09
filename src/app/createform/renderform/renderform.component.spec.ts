import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderformComponent } from './renderform.component';

describe('RenderformComponent', () => {
  let component: RenderformComponent;
  let fixture: ComponentFixture<RenderformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
