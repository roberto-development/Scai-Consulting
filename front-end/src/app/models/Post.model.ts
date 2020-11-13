import { Profile } from './Profile.model';

export class Post extends Object {
  id: number;
  createdTime: string;
  description: string;
  objectId: any;
  place: string;
  canComment: number;
  canShare: number;
  ispublic: number;
  profile: Profile;
}
