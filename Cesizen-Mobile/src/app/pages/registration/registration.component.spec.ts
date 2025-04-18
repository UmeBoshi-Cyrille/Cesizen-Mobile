import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent],
      providers: [
        provideHttpClient(),
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
