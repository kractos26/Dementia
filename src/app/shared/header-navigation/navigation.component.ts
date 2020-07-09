import { Component, AfterViewInit,OnInit } from '@angular/core';
import {StorageServiceService} from '../../services/storage-service.service'
import {Router } from '@angular/router';

import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {User} from '../../modelos/user.model';
import { AuthService } from "angularx-social-login"
import { SocialUser,FacebookLoginProvider } from "angularx-social-login"



declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

   userfacebook: SocialUser = {
    provider: "",
    id: "",
    email: "",
    name: "",
    photoUrl: 'assets/images/users/avatar-default-icon.png',
    firstName: "",
    lastName: "",
    authToken: "",
    idToken: "",
    authorizationCode: ""
   }

   loggedIn: boolean;
  public config: PerfectScrollbarConfigInterface = {};
  EsVistaServicios: boolean = false;

  public showSearch = false;
  public user:User = new User();
  constructor(
    private modalService: NgbModal,
    private storage:StorageServiceService,
    private router:Router,
    private authService: AuthService
    )
   
    {
    }


  ngOnInit() {
    
     this.user =  this.storage.getCurrentUser();
   
     this.authService.authState.subscribe((userfb) => {
      
      this.userfacebook = (userfb != null) ?userfb:this.userfacebook;
      this.loggedIn = this.userfacebook != null;
    
    },error=>{
      
     
          
    });
  }

  LogOut()
  {
    this.storage.removeCurrentSession();
    this.router.navigate(['/authentication/logout']);
  }
 

  // This is for Notifications
    

}
