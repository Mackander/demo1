import { Component } from '@angular/core'

@Component({
    selector: "app-assignment3",
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
    toggler: boolean = true;
    counter: number = 0;
    clickCollector = []

    btnClick() {
        this.toggler = !this.toggler;
        this.clickCollector.push(new Date());
    }
}