import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menulateral } from './menulateral';

describe('Menulateral', () => {
  let component: Menulateral;
  let fixture: ComponentFixture<Menulateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menulateral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menulateral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
