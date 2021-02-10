import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  saveUser(): void {
    this.userService.createUser(this.user).subscribe(
      (data) => {
        this.goToUserList();
      },
      (error) => console.log(error)
    );
  }

  goToUserList(): void {
    this.router.navigate(['/users']);
  }

  onSubmit(): void {
    console.log(this.user);
    this.saveUser();
  }
}
