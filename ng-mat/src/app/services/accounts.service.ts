import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountsService {

    constructor(private http: HttpClient) { }

    getAccounts() {

        return this.http.get('./shared/mock-data/accounts.json');

    }

}
