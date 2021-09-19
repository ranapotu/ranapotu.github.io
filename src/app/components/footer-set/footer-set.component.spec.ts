import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSetComponent } from './footer-set.component';

describe('FooterSetComponent', () => {
  let component: FooterSetComponent;
  let fixture: ComponentFixture<FooterSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
