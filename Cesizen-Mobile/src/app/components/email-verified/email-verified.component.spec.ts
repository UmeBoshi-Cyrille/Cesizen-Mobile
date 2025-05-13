import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedComponent } from './email-verified.component';
import { provideRouter } from '@angular/router';

describe('EmailVerifiedComponent', () => {
  let component: EmailVerifiedComponent;
  let fixture: ComponentFixture<EmailVerifiedComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [EmailVerifiedComponent],
      providers: [
        provideRouter([])
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
