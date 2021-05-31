import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  name1="James More";
  name2="Sam Lane";
  name3="Akshai J";
  name4="Jomin G";
  name5="Krupa Jane";
  name6="Irine percy";
  name7="Sam Van"

  constructor() { }

  ngOnInit(): void {
  }

}
