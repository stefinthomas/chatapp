import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name="James More";
  email="jamesmore@gmail.com";
  mobile="+1 6754789976";
  address="Wahington DC";
  about="Full stack developer";

  constructor() { }

  ngOnInit(): void {
  }

}
