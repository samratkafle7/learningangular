import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemneutralComponent } from './problemneutral.component';

describe('ProblemneutralComponent', () => {
  let component: ProblemneutralComponent;
  let fixture: ComponentFixture<ProblemneutralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemneutralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemneutralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
