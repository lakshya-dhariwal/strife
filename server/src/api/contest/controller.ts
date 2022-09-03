import database from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import { NextFunction } from 'express';
import { createContestSchema, joinContestSchema } from './schema';
import { makeid } from '../../utils/helpers';

export const fetchContest = async (next: NextFunction, query: string) => {
  try {
    const db = (await database()).collection('contests');

    if (!query) {
      return { status: false, message: 'Bad Request' };
    }

    if (query === 'all') {
      return await db.find({}).toArray();
    }

    return await db.find({ contest_id: query }).toArray();
  } catch (error) {
    LoggerInstance.error(error);
    next('Hello World');
  }
};

export const joinContest = async (next: NextFunction, contest_id: string, data: joinContestSchema) => {
  try {
    const db = (await database()).collection('contests');

    if (!contest_id) {
      return { status: false, message: 'Bad Request' };
    }

    if (
      (await db.find({ participants: { $elemMatch: { walletAddress: data.walletAddress } } }).toArray()).length != 0
    ) {
      return { status: false, message: 'User already join the contest' };
    }

    await db.updateOne(
      { contest_id: contest_id },
      { $push: { participants: { walletAddress: data.walletAddress, score: data.score || 0 } } },
    );
    return { staus: true, message: 'User added to contest' };
  } catch (error) {
    LoggerInstance.error(error);
    next('Hello World');
  }
};

export const createContest = async (next: NextFunction, data: createContestSchema) => {
  try {
    const db = (await database()).collection('contests');
    const currTime = Math.floor(Date.now() / 1000);
    const result = {
      contest_id: makeid(),
      contest_start_time: currTime,
      contest_end_time: currTime + data.contest_duration * 3600,
    };

    db.insertOne({ ...result, ...data });
    return { staus: true, message: 'Contest Created' };
  } catch (error) {
    LoggerInstance.error(error);
    next('Hello World');
  }
};
