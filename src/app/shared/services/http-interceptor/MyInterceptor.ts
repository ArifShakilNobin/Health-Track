import { Injectable } from "@angular/core";
import {
    HttpInterceptor, HttpHandler, HttpRequest,
} from '@angular/common/http';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        let token: string | null = localStorage.getItem("accessToken");
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        return next.handle(request);
    }

}