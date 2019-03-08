import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class testService {
    private dataUrl:string = 'api/test.json';
    constructor(private http:HttpClient) {
        // ...init
    }
    getData() {
        return this.http.get(this.dataUrl);
    }
}
