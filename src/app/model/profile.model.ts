import { User } from "./user.model";

export interface Profile {
    profileId?: number;
    user?: User;
    readingPreference?: string;
    favouriteGenre: string;
    booksOwned: string;
    wishList: string;
  }
  