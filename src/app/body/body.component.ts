import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  users = [];
  cardview = true;
  listview = false;
  mapview = false;

  showcard(type) {
    if (type == 1) {
      this.cardview = true; 
      this.listview = false;
    }
    if (type == 2) {
      this.cardview = false; 
      this.listview = true;
    }
  }

  setcardview() {
    if (this.cardview === true) {
      return true
    }
    else if(this.listview===true) {
      return true
    }
  }

  setlistview() {
    this.listview = true;
  }

  constructor(private ServerService: ServerService) { }

  ngOnInit() {
    this.ServerService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    })
  }

}
