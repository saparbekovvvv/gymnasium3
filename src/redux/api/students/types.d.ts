namespace STUDENTS {
  interface IStudent {
    name: string;
    surname: string;
    last_name: string;
  }

  type GetStudentsResponse = IStudent[];

  type GetStudentsRequest = void;
}
