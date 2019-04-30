import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlmComponent } from './klm.component';

describe('KlmComponent', () => {
  let component: KlmComponent;
  let fixture: ComponentFixture<KlmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
