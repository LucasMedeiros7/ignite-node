import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'NodeJs',
    duration: 10,
    educator: 'Lucas Medeiros',
  });

  CreateCourseService.execute({
    name: 'ReactJs',
    educator: 'Diego Fernandes',
  });

  res.send();
}
