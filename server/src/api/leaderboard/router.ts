import { Request, Response, Router } from 'express';
import { NextFunction } from 'express';
import { fetchLeaderboard, getWining, updateScore } from './controller';
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

const updateScoreleaderboardHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: updateScoreSchema = req.body;
    const result = await updateScore(next, data);
    res.json(result);
  } catch (error) {
    next('');
  }
};

const getWiningHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contest_id = req.params.contest_id;
    const data = await getWining(next, contest_id);
    return res.json(data);
  } catch {
    next('');
  }
};

const getAllWin = async (req: Request, res: Response, next: NextFunction) => {
  const address = req.params.address;
  return res.json({
    previousWin: [{ address: address, contest: 'pacman', contest_id: 'ox4GHa' }],
  });
};

export const leaderboardRouteHandler = () => {
  app.get('/:contest_id', fetchLeaderboardHandler);
  app.put('/update-score', updateScoreleaderboardHandler);
  app.post('/wining/:contest_id', getWiningHandler);
  app.get('/get-all-wins/:address', getAllWin);
  return app;
};
