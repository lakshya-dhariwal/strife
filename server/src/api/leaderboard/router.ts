import { Request, Response, Router } from 'express';
import { NextFunction } from 'express';
import { fetchLeaderboard } from './controller';

const app = Router();
const fetchLeaderboardHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.params.query;
    const data = await fetchLeaderboard(next, query);
    return res.json(data);
  } catch (error) {
    next('');
  }
};

export const leaderboardRouteHandler = () => {
  app.get('/:contest_id', fetchLeaderboardHandler);
  return app;
};
