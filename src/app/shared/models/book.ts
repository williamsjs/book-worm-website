import { ISearchItem } from '../interfaces/search-item.interface';

export class Book implements ISearchItem {
  public synopsis: string;
  public publisher: string;
  public average_rating: number;
  public country: string;
  public genres: any[];

  constructor(public title: string, public imageUrl: string) {}


}
