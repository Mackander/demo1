import { Injectable } from '@angular/core';
import { CounterService } from '../assignment5/counter.service';

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) { }

    userSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.activeToInactiveCounter = this.counterService.activeToInactiveCounter + 1;
    }

    userSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter + 1;
    }
}
