import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgbdTypeaheadHttp } from './search-location/search-location.component';
import { FriendsFinder } from './search-friends/search-friends.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NgbdTypeaheadHttp,
    FriendsFinder,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    NgbModule,
    RouterModule,
    NgbModule,
    NgbdTypeaheadHttp,
    FriendsFinder,
    SpinnerComponent,
  ],
})
export class SharedModule {}
