import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordResponseComponent } from './forget-password-response.component';
import { provideRouter } from '@angular/router';

describe('ForgetPasswordResponseComponent', () => {
  let component: ForgetPasswordResponseComponent;
  let fixture: ComponentFixture<ForgetPasswordResponseComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ForgetPasswordResponseComponent],
      providers: [
        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
