interface course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {
  execute({ name, duration, educator }: course) {
    duration = duration || 6;
    console.log({ name, duration, educator });
  }
}

export default new CreateCourseService();
