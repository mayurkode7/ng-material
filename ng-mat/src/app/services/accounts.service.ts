import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable()
export class AccountsService {

    private url = 'https://api.github.com/users';

    constructor(private http: HttpClient) { }

    getAccounts(): Observable<any> {

        return this.http.get(this.url);

    }

}
