import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

var users :User[];
@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const { url, method, headers, body } = request;

      // wrap in delayed observable to simulate server api call
      return of(null)
          .pipe(mergeMap(handleRoute))
          .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(delay(500))
          .pipe(dematerialize());
     return handleRoute();

      function handleRoute() {
          switch (true) {
              case url.endsWith('/users/authenticate') && method === 'POST':
                  return authenticate();
              case url.endsWith('/users') && method === 'GET':
                  return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                return getUserById();
              default:
                  // pass through any requests not handled above
                  return next.handle(request);
          }    
      }

      // route functions

      function authenticate() {
          const { username, password } = body;
          const user = request.body.users?.find(x => x.userName === username && x.password === password);
          if (!user) return error('Username or password is incorrect');
          return ok({
              userId: user.userId,
              userName: user.userName,
              token: 'fake-jwt-token',
              email:user.email,
              account:user.account,
              phone:user.phone,
              role: user.role, 
              address:user.address,
              age:user.age,
              salary:user.salary,
              city:user.city,
              country:user.country,
              level:user.level,
              situation:user.situation,
              notifications:user.notifications,
              claim:user.claim,
              communications:user.communications
          }) 
      }

      function getUsers() {
          if (!isLoggedIn())  { return unauthorized();}
          return ok(users);
      }

      function getUserById() {
        if (!isLoggedIn()){ return unauthorized();}

        // only admins can access other user records
        if (!isAdmin() && currentUser().userId !== idFromUrl()) {return unauthorized();}

        const user = users.find(x => x.userId === idFromUrl());
        return ok(user);
    }
    function currentUser() {
        if (!isLoggedIn()) {} ;
        const id = parseInt(headers.get('Authorization').split('.')[1]);
        return users.find(x => x.userId === id);
    }

    function isAdmin() {
        return isLoggedIn() && (currentUser().role === "ADMIN" || currentUser().role === "AGENT");
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }
      // helper functions

      function ok(body) {
        return of(new HttpResponse({ status: 200, body }))
            .pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message) {
        return throwError({ status: 400, error: { message } })
            .pipe(materialize(), delay(500), dematerialize());
    }

      function unauthorized() {
        return throwError({ status: 401, error: { message: 'unauthorized' } })
            .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

      function isLoggedIn() {
          return headers.get('Authorization') === 'Bearer fake-jwt-token';
      }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
