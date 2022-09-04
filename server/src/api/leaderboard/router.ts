import { Request, Response, Router } from 'express';
import { NextFunction } from 'express';
import { fetchLeaderboard, updateScore } from './controller';
import { updateScoreSchema } from './schema';

const app = Router();
const fetchLeaderboardHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contest_id = req.params.contest_id;
    const data = await fetchLeaderboard(next, contest_id);
    return res.json(data);
  } catch (error) {
    next('');
  }
};

const updateScoreleaderboard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: updateScoreSchema = req.body;
    const result = await updateScore(next, data);
    res.json(result);
  } catch (error) {
    next('');
  }
};

export const leaderboardRouteHandler = () => {
  app.get('/:contest_id', fetchLeaderboardHandler);
  app.put('/update-score', updateScoreleaderboard);
  return app;
};
