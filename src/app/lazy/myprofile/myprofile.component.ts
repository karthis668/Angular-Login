import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  userName: any;
  address: any;
  phone: any;
  email: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    // const state = navigation?.extras.state;
    var state = navigation?.extras.state as {
      name       : string,
      Address        : string,
      phone          : string,
      email          : string,
    };

    if(state){
      const user_name    = state.name;
      const user_address = state.Address;
      const user_phone   = state.phone;
      const user_email   = state.email;
      localStorage.setItem('userName',user_name);
      localStorage.setItem('userAddress',user_address);
      localStorage.setItem('userPhone',user_phone);
      localStorage.setItem('userEmail',user_email);
    }

     console.log(state);
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.address = localStorage.getItem('userAddress');
    this.phone = localStorage.getItem('userPhone');
    this.email = localStorage.getItem('userEmail');
  }

}
