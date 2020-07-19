import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.services';

@Component({
    selector: 'app-home',
    template: 'My home {{title}} ',
    styleUrls: ['./app.component.css']
})

export class HomeComponent implements OnInit{
    @Input() title: string;
    @Output()  sendContactData = new EventEmitter();

    contactNo: string;
    constructor(private appSer: AppService){}
    ngOnInit(){
        // this.appSer.getData().subscribe((res: any)=>{
        //     console.log(res.userId);
        //     this.sendData(res.userId)
        // });
    }

    sendData(id){
        this.sendContactData.emit(this.title + id);
    }
}