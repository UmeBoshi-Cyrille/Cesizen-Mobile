import { TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './register.component';

describe('RegistrationComponent', () => {
  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [RegistrationComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
