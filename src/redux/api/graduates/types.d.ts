namespace GRADUATES {
  interface IGraduates {
    surname: string;
    name: string;
    last_name: string;
    year: null
  }
  type GetGraduatesResponse = IGraduates[];

  type GetGraduatesRequest = void;
}
