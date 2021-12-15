import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userid: any;
  userDetails : any;
  dataLoaded:boolean = false;
  editUserForm : FormGroup = new  FormGroup({});

  constructor(private activatedRoute : ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar){}
  ngOnInit(): void {
  this.dataLoaded =false;
    this.activatedRoute.params.subscribe(data => {
      this.userid = data.id;
    })

    if(this.userid!== '') {
      //view user details
      this.userService.viewUsers(this.userid)
      .toPromise()
      .then(data =>{
        this.userDetails = data;
        Object.assign(this.userDetails,data);
        // console.log(this.userDetails)
        this.editUserForm = this.formBuilder.group({
        'username' : new FormControl(this.userDetails.name),
        'email': new FormControl(this.userDetails.email)
        })
        this.dataLoaded = true;
      })
      .catch(err=>{
        console.log(err);
      })

    }
  }
  updateUser(){
    this.userService.updateUser(this.userid, this.editUserForm.value).subscribe(data => {
      console.log(this.editUserForm.value)
    this._snackBar.open("user updated successfully")
    }, err => {
      this._snackBar.open("unable to update user")
    });
  }
    // console.log(this.editUserForm.value);

  }

