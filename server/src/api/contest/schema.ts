export interface joinContestSchema {
  walletAddress: string;
  score: number;
}

export interface createContestSchema {
  contest_duration: number;
  contest_name: string;
  participants: Array<object>[];
  contest_status: boolean;
}
