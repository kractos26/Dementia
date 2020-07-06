import { LogoutService } from './../../services/logout.service';
import { Component, OnInit } from '@angular/core';
import { StorageServiceService} from '../../services/storage-service.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logautservice:LogoutService,private storage:StorageServiceService,private router:Router) { }

  ngOnInit() {

    let logoutRequest = {
      ApplicationId:this.storage.getCurrentApplication(),
      Token:this.storage.getCurrentToken()
    };
    
    this.logautservice.logOut(logoutRequest);
    this.storage.removeCurrentSession();
    this.router.navigate(['/authentication/login']);
  }

}
