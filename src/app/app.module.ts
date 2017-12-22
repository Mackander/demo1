import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssignmentComponent } from '../app/assignment/assignment.component';
import { Assignment3Component } from '../app/assignment3/assignment3.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { UserService } from './assignment5/users.service';
import { CounterService } from './assignment5/counter.service';
import { UserFormComponent } from './assignment6/user-form/user-form.component';
import { ReactiveFormComponent } from './assignment7/reactive-form/reactive-form.component';
import { FilterPipe } from './filter.pipe';
import { FilterComponent } from './assignment8/filter/filter.component';
import { ReversePipe } from './assignment8/reverse.pipe';
import { SortPipe } from './assignment8/sort.pipe';
import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    // AssignmentComponent,
    // Assignment3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BetterHighlightDirective,
    UnlessDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UserFormComponent,
    ReactiveFormComponent,
    FilterPipe,
    FilterComponent,
    ReversePipe,
    SortPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UserService, CounterService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
