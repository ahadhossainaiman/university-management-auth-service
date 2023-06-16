import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoute = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semester',
    route: SemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

// router.use('/users', UserRoutes.router);
// router.use('/academic-semester', SemesterRoutes);

export default router;
