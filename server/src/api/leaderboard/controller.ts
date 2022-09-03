import database from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import { NextFunction } from 'express';

export const fetchLeaderboard = async (next: NextFunction, query: string) => {
  try {
    const db = (await database()).collection('contests');

    if (!query) {
      return { status: false, message: 'query is undefined' };
    }
  } catch (error) {
    LoggerInstance.error(error);
    next('Hello World');
  }
};
