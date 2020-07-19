import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

//var jsondata = require('./db.json');

export class AppService{
    constructor(){}

    /* getData() : Observable<any>{
        let Header = new HttpHeaders({'Content-type':'application/json'});
        return this.http.get(jsondata, {
            Heades: Header
        });
    } */

    getData(){
        return {"userId": 2};
    }
}