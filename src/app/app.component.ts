import { Component } from '@angular/core';
import { Profile } from './Profile';
import { ProfileServiceService } from './profile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private editService: ProfileServiceService){}
  title = 'ProfileApp';
  profile:Profile = this.editService.getUserProfile();

}
