import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import myData from '../../userdata.json';
import { MatSnackBar } from "@angular/material/snack-bar";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup ;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  ngOnInit() {
    console.log(myData);
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

      this.submitted = true;
      const formvalue = this.loginForm.value;
      console.log(formvalue);
      console.log(myData);

      if(formvalue.username != '' && formvalue.password != ''){
        let index = myData.findIndex(
          (data) => data.name == formvalue.username && data.password == formvalue.password);
            if(index == -1){
              this.snackBar.open("Username Or Password Incorrect",'close', {
            duration: 3000
            });
          }
          else{
            const mydetails= myData[index];
            console.log(mydetails);

      this.router.navigateByUrl('/lazy/myprofile', {
        state: {
          id: mydetails.id,
          name:  mydetails.name,
          Address:  mydetails.Address,
          email:  mydetails.email,
          phone:  mydetails.phone}
      });

        this.snackBar.open("Logged in successfully",'close', {
          duration: 3000
        });
          }
      }
      else{
        this.snackBar.open("Please enter the required fields",'close', {
          duration: 3000
        });
      }

  }

  gotoprofile(){
    this.router.navigate(['/lazy/myprofile']);
  }


}
