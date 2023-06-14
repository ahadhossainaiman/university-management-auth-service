import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route';

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

// router.use('/users', UserRoutes.router);
// router.use('/academic-semester', SemesterRoutes);

export default router;
