import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

    constructor(private http: Http) { }

    storeServers(servers: any[]) {

        const headers = new Headers({
            'Contet-Type': 'application/json'
        });

        // return this.http.post('https://quick-reference-keantegration.firebaseio.com/data.json', servers, { headers: headers });
        return this.http.put('https://quick-reference-keantegration.firebaseio.com/data.json', servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://quick-reference-keantegration.firebaseio.com/data')
            .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'Fetched_' + server.name;
                }
                return data;
            }
            )
            .catch(
            (error: Response) => {
                console.log(error);
                // return Observable.throw(error);
                return Observable.throw('Somethingapp went wrong');
            });
    }

    getAppName() {
        return this.http.get('https://quick-reference-keantegration.firebaseio.com/appName.json')
            .map((response: Response) => {
                const data = response.json();
                console.log(data);
                return data;
            });
    }

}
