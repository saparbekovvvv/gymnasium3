namespace SUCCESSFUL_GRADUATES {
  interface ISuccessfulGraduates {
    image: null;
    content: string;
    content_ky: string;
    content_ru: string;
    year: null;
  }
  type GetSuccessfulGraduatesResponse = {
    data: ISuccessfulGraduates[];
  };
  type GetSuccessfulGraduatesRequest = {
    year: number;
  };
}
