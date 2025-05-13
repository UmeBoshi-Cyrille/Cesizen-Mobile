import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetForgottenPasswordComponent } from './reset-forgotten-password.component';

describe('ResetForgottenPasswordComponent', () => {
  let component: ResetForgottenPasswordComponent;
  let fixture: ComponentFixture<ResetForgottenPasswordComponent>;

  beforeEach(async () => {
    // Mock CapacitorHttp
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).CapacitorHttp = {
      get: jasmine.createSpy('get')
    };

    await TestBed.configureTestingModule({
      imports: [ResetForgottenPasswordComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetForgottenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
