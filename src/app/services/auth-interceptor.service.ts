import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AiService } from './ai.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req, next) {
        const aiService = this.injector.get(AiService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + aiService.token)
        });

        return next.handle(authRequest);
    }
}
