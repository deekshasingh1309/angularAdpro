import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  public users:Array<Object>;
  public displayType:any = 1;

  viewType(type:any) {
    if (type == 1) { 
      this.displayType = 1; 
    }
    else if (type == 2) { 
      this.displayType = 2;    
    }
  }

  constructor(private ServerService: ServerService) { }

  ngOnInit() {
    this.getUser()
  }
  
  getUser(){
    this.ServerService.sendGetRequest().subscribe((data: any[]) => {
      this.users = data;      
    })
  }

}
