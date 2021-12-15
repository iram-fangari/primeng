import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';

const routes: Routes = [
  {path : 'users',
    children :[
      {path : '', component: ListUsersComponent},
      {path : 'view/:id', component: ViewUsersComponent},
      {path : 'list', component: ListUsersComponent},
      {path : 'delete/:id', component: DeleteUserComponent},
      {path : 'edit/:id', component: EditUserComponent},
      {path : 'create', component: AddUsersComponent},
      {path : 'back', component: ListUsersComponent},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
