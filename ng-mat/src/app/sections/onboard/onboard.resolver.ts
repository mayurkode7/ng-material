import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountsService } from 'src/app/services/accounts.service';


@Injectable()
export class OnboardResolver implements Resolve<Observable<any>> {
  constructor(private accountService: AccountsService) {}

  resolve(): Observable<any> {
    return this.accountService.getAccounts();
  }
}