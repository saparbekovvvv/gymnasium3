namespace TEACHERS {
  interface ITeacher {
    surname: string;
    name: string;
    last_name: string;
    experience: string;
    subject: string;
    subject_ky: string;
    subject_ru: string;
    education: string;
    education_ky: string;
    education_ru: string;
    successes: string;
    successes_ky: string;
    successes_ru: string;
    image: string;
  }

  type GetTeachersResponse = ITeacher[];
  type GetTeachersRequest = void;
}
