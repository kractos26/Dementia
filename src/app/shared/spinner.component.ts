import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import {StorageServiceService} from '../services/storage-service.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;
   user:any={};
  @Input() public backgroundColor = 'rgba(0, 115, 170, 0.69)';
 
  constructor(
    private router: Router,private storage:StorageServiceService,
    @Inject(DOCUMENT) private document: Document
  ) {

    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) 
        {
          this.isSpinnerVisible = true;
        } 
        else if 
        (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) 
        {
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    );
    
    this.router.navigate(['starter']);
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
