import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// This test file was generated at the same time the actual login service was created using the `ng g service` cli command.
describe('Login Service', () => {
  let service: LoginService;
  let http: HttpClient;

  // Controller to be injected into tests, that allows for mocking and flushing of requests. It's basically like a server
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('Service has been created', () => {
    expect(service).toBeTruthy();
    expect(service).toBeDefined();
  });

  // Spec to test for a succesfull scenario
  it('Login api', () => {
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    service.login(inputData).subscribe((response: any) => {
      console.log(response);
      console.log('Hello Jasmine');
      expect(response).toEqual(testData);
    });

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');
    req.flush(testData);
  });

  // Spec to test for a failed scenario
  it('call to login() failed', () => {
    const errorMsg = 'Status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    service.login(inputData).subscribe(
      () => {
        fail('should have failed with a 500 error');
      },
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(500, 'status');
        expect(error.error).toEqual(errorMsg, 'message');
      }
    );

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');
    req.flush(errorMsg, { status: 500, statusText: 'Server Error' });
  });
});
