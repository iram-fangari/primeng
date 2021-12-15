import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  email: string;
  username: string;
}
const ELEMENT_DATA: User[] = [
  // {id: 1, name: 'iram', email: 'abc@testing.com', username: 'iram_fangari'},

];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  listUsers:User[] =[];
  displayedColumns: string[] = ['id', 'name','username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
       this.listUsers = data;
});
}

  }



