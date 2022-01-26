import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedditListContainerComponent } from './components/reddit-list-container/reddit-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: RedditListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
