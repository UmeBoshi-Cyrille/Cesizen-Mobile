import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '@services/login/login.service';

describe('SeConnecterComponent', () => {
  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [LoginService],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
