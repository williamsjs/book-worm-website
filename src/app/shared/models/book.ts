export class Book {

  constructor(
    public title: string,
    public synopsis: string,
    public publisher: string,
    public average_rating: number,
    public country: string,
    public genres: any[]
  ) {}
}