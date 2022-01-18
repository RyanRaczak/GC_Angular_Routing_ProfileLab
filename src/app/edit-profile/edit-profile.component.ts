import { Component, OnInit } from '@angular/core';
import { Profile } from '../Profile';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private editService: ProfileServiceService) { }

  profile:Profile = this.editService.getUserProfile();

  editInput(){
    let name:string = (<HTMLInputElement>document.getElementById("editName")).value;
    let contact:string = (<HTMLInputElement>document.getElementById("editContact")).value;
    let bio:string = (<HTMLInputElement>document.getElementById("editBio")).value;
    let pic:string = (<HTMLInputElement>document.getElementById("editPic")).value;

    //Could not get the radio inputs to come out of the list. Pulling by element ID alone
    //Always showed the first option. Pulling out by ID and Tag returned an empty list

    /*let picInputs = (<HTMLInputElement>document.getElementById("editPic")).getElementsByTagName("input");
    let pic:string = "";
    for(let i = 0; i < picInputs!.length; i++){
      if(picInputs[i].checked){
        pic = picInputs[i].value;
        break;
      }
    }*/
    this.editService.setUserProfile(name, contact, bio, pic);
  }

  ngOnInit(): void {
  }

}
