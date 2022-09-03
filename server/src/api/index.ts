import { Router } from 'express';
import { contestRouteHandler } from './contest/router';
import { leaderboardRouteHandler } from './leaderboard/router';
export default (): Router => {
  const app = Router();

  app.use('/contests', contestRouteHandler());
  app.use('/leaderboard', leaderboardRouteHandler());

  return app;
};
