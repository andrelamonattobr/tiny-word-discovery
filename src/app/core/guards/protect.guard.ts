import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivate{
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): MaybeAsync<GuardResult> {
    if ((!isPlatformBrowser(this.platformId)) || (!sessionStorage.getItem("logged")) || (sessionStorage.getItem("logged") != "yes")){
      this.router.navigate(['']);
      return false;
    }
    
    return true;

  }
  
}