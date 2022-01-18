import { Injectable } from '@angular/core';
import { Profile } from './Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  profile:Profile = new Profile();
  constructor() { }

  getUserProfile():Profile{
    return this.profile;
  }

  setUserProfile(name:string, contact:string, bio:string, pic:string){
    this.profile.name = name;
    this.profile.contact = contact;
    this.profile.bio = bio;
    this.profile.pic = pic;
  }
}
