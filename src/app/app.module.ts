import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
  { path: 'todos', component: TodosComponent },
  { path: 'completed', component: CompletedComponent },
  { path: '**', component: TodosComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletedComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
