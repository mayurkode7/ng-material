import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountsService } from 'src/app/services/accounts.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OnboardResolverService implements Resolve<any> {

    constructor(accountService: AccountsService, http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {

        return null;
          //  return this.http.get();

    }
}
