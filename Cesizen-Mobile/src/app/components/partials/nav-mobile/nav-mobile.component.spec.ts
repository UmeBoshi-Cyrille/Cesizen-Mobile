import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMobileComponent } from './nav-mobile.component';
import { provideRouter } from '@angular/router';

describe('NavMobileComponent', () => {
  let component: NavMobileComponent;
  let fixture: ComponentFixture<NavMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMobileComponent],
      providers: [
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
