import database from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import { NextFunction } from 'express';
import { updateScoreSchema } from './schema';

export const fetchLeaderboard = async (next: NextFunction, contest_id: string) => {
  try {
    const db = (await database()).collection('contests');

    if (!contest_id) {
      return { status: false, message: 'query is undefined' };
    }

    const leaderboard = await db.find({ contest_id: contest_id }).toArray();
    return leaderboard[0]['participants'];
  } catch (error) {
    LoggerInstance.error(error);
    next('Hello World');
  }
};

export const updateScore = async (next: NextFunction, data: updateScoreSchema) => {
  try {
    const db = (await database()).collection('contests');

    if (!data) {
      return { status: false, message: 'data is undefined' };
    }
    await db.updateOne(
      { contest_id: data.contest_id, 'participants.$.walletAddress': data.walletAddress },
      { $set: { 'participants.$.score': data.score } },
    );
    return { staus: true, message: 'User score updated' };
  } catch (error) {
    LoggerInstance.error(error);
    return { status: false, message: `ERROR: ${error}` };
  }
};

export const getWining = async (next: NextFunction, contest_id: string) => {
  try {
    const db = (await database()).collection('contests');
    const result = db
      .aggregate([
        { $match: { contest_id: contest_id } },
        {
          $addFields: {
            currentWiningParticipant: {
              $reduce: {
                input: '$participants',
                initialValue: { score: 0 },
                in: { $cond: [{ $gte: ['$$this.score', '$$value.score'] }, '$$this', '$$value'] },
              },
            },
          },
        },
      ])
      .toArray();
    return result;
  } catch (error) {
    LoggerInstance.error(error);
    return { status: false, message: `ERROR: ${error}` };
  }
};
