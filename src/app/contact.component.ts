import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-contact',
    template: 'My Contact {{myContact}}',
    styleUrls: ['./app.component.css']
})

export class ContactComponent{
    @Input() myContact : string ;
}