import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
userID : string ='';
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService,
    private _snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userID =data.id;
    });

    if(this.userID){
    this.userService.deleteUser(this.userID).subscribe(data => {
      this._snackBar.open("user deleted successfully")
      // this.router.navigateByUrl("http://localhost:4200/user/lists");
    },
    err => {
      this._snackBar.open("unable to delete user")
    });
  }

  }
}
