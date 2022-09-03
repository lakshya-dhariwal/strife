import { Request, Response, Router } from 'express';
import { createContest, fetchContest, joinContest } from './controller';
import { NextFunction } from 'express';
import { joinContestSchema } from './schema';
import LoggerInstance from '../../loaders/logger';

const app = Router();

const fetchContestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.params.query;
    const data = await fetchContest(next, query);
    return res.json(data);
  } catch (error) {
    next('');
  }
};

const joinContestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contest_id = req.params.contest_id;
    const data: joinContestSchema = req.body;
    return res.json(await joinContest(next, contest_id, data));
  } catch (error) {
    next('');
  }
};

const createContestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await createContest(next, req.body));
  } catch (error) {
    next('');
  }
};

export const contestRouteHandler = () => {
  app.get('/:query', fetchContestHandler);
  app.put('/join/:contest_id', joinContestHandler);
  app.post('/create', createContestHandler);
  return app;
};
