import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;

  // fixture is the test environment for this component
  let fixture: ComponentFixture<AlertButtonComponent>;

  // de is the rendered HTML
  let de: DebugElement;

  // Test bed specific for this testing environment
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
    }).compileComponents(); // compiles template and css
  });

  /** You cant test the component directly or test the rendered HTML via the debugElement */

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    // Run angular changes detection before each of these tasks
    fixture.detectChanges();
  });

  // First spec: the first thing we'll test is whether or not the component was created successfully.
  it('should create alert button', () => {
    expect(component).toBeTruthy();
  });

  // Second spec
  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  // Let's check if the component rendered properly in the DOM
  it('should have an h1 tag of `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  // A spec that will tell us whether a function is doing what it's supposed to do
  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalse();
  });

  // What happens when code runs asynchronously? This should fail
  // it('should toggle the message boolean asynchronously', () => {
  //   expect(component.hideContent).toBeTruthy();
  //   component.toggleAsync();
  //   expect(component.hideContent).toBeFalse();
  // });

  // To solve the asyn problem we use the fakeAsync() helper from angular
  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    // tick(499); // Fails :(
    tick(500); // Works :)
    expect(component.hideContent).toBeFalse();
  }));
});
