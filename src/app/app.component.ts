// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   gameNumber: number = 1;

//   numberCollector(data: { gameNumber: number }) {
//     this.gameNumber = data.gameNumber;
//   }
// }


import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serverService: ServerService) { }
  appName = this.serverService.getAppName();
  onSave() {
    const servers = [{
      name: 'Testserver',
      capacity: 10,
      id: 123
    },
    {
      name: 'Liveserver',
      capacity: 40,
      id: 456
    }];

    this.serverService.storeServers(servers)
      .subscribe((response) => console.log(response),
      (error) => console.log(error));
  }

  onGet() {
    this.serverService.getServers()
      .subscribe((servers: any[]) => {
        console.log(servers);
      },
      (error) => console.log(error));
  }
}

