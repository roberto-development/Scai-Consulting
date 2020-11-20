import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  EditButtonClicked: boolean = false;

  location: string =
    this.userService.getaUserProperty(
      this.authService.getLoggedUserId(),
      'location'
    ) || '';
  hometown: string =
    this.userService.getaUserProperty(
      this.authService.getLoggedUserId(),
      'hometown'
    ) || '';
  work_in: string =
    this.userService.getaUserProperty(
      this.authService.getLoggedUserId(),
      'work_in'
    ) || '';
  birthdayObject: {
    year: string;
    month: string;
    day: string;
  } = this.userService.getaUserProperty(
    this.authService.getLoggedUserId(),
    'birthday'
  );
  birthday: string = this.birthdayObject.year
    ? `${this.birthdayObject.year}/${this.birthdayObject.month}/${this.birthdayObject.day}`
    : '';

  constructor(
    private userService: UserServices,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  showInputs = () => {
    this.EditButtonClicked = true;
  };
  editUserInfos = (f: NgForm) => {
    const location = f.value.location;
    const hometown = f.value.hometown;
    const work_in = f.value.work_in;
    const birthday = f.value.birthday;

    this.location = location;
    this.hometown = hometown;
    this.work_in = work_in;
    this.birthday = birthday;

    this.userService.updateUser(
      this.authService.getLoggedUserId(),
      'location',
      location
    );
    this.userService.updateUser(
      this.authService.getLoggedUserId(),
      'hometown',
      hometown
    );
    this.userService.updateUser(
      this.authService.getLoggedUserId(),
      'work_in',
      work_in
    );
    this.userService.updateUser(
      this.authService.getLoggedUserId(),
      'birthday',
      birthday
    );

    this.EditButtonClicked = false;
  };
}
