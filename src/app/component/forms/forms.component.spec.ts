import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { By } from '@angular/platform-browser';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create the login form with default values', () => {
    expect(component).toBeTruthy();
    const loginForm = component.loginForm;
    expect(loginForm).toBeDefined();
    expect(loginForm.get('email')!.value).toBe(''); // Use non-null assertion
    expect(loginForm.get('password')!.value).toBe(''); // Use non-null assertion
  });

  it('should validate the email field', () => {
    const emailControl = component.loginForm.get('email');
    
    emailControl!.setValue(''); // Use non-null assertion
    expect(emailControl!.hasError('required')).toBeTruthy();

    emailControl!.setValue('invalid-email'); // Use non-null assertion
    expect(emailControl!.hasError('email')).toBeTruthy();

    emailControl!.setValue('test@example.com'); // Use non-null assertion
    expect(emailControl!.valid).toBeTruthy();
  });

  it('should validate the password field', () => {
    const passwordControl = component.loginForm.get('password');
    
    passwordControl!.setValue(''); // Use non-null assertion
    expect(passwordControl!.hasError('required')).toBeTruthy();

    passwordControl!.setValue('123'); // Use non-null assertion
    expect(passwordControl!.hasError('minlength')).toBeTruthy();

    passwordControl!.setValue('1234'); // Use non-null assertion
    expect(passwordControl!.valid).toBeTruthy();
  });

  it('should disable the submit button if the form is invalid', () => {
    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();

    component.loginForm.get('email')!.setValue('test@example.com'); // Use non-null assertion
    component.loginForm.get('password')!.setValue('1234'); // Use non-null assertion
    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalsy();
  });

  it('should log form value on valid form submission', () => {
    spyOn(console, 'log');
    component.loginForm.get('email')!.setValue('test@example.com'); // Use non-null assertion
    component.loginForm.get('password')!.setValue('1234'); // Use non-null assertion
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    submitButton.click();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: '1234'
    });
  });
});
