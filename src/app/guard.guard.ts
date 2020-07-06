import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageServiceService} from './services/storage-service.service';
import { UserService } from './services/user.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 
	constructor(private strorage:StorageServiceService,
		private router:Router, 
		private authService : UserService )
	{
	}
	
	private evalAuthentication() : boolean
	{
			this.authService.EvalAuthentication().subscribe(respuesta=>
			{
					if(respuesta == null || !respuesta.IsProcesed)
					{
						this.router.navigate(['/authentication/logout']);
						return false;
					}
			},
			error=>
			{
					this.router.navigate(['/authentication/logout']);
					return false;
			});

			return true;
	}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		
		this.evalAuthentication();

  	if (this.strorage.isAuthenticated() && this.strorage.isUserEmailValidated() && this.strorage.isUserPhoneValidated()) {
  		return true;
		}
		else if(!this.strorage.isAuthenticated())
		{
  		this.router.navigate(['/authentication/login']);
  		return false;
		}
		else if(!this.strorage.isUserPhoneValidated())
		{
			this.router.navigate(['/authentication/confirmcode/phone']);
			return false;
		}
		else if(!this.strorage.isUserEmailValidated())
		{
			this.router.navigate(['/authentication/confirmcode/email']);
  		return false;
		}
		
		return false;
  }
}
