export interface joinContestSchema {
  walletAddress: string;
  score: number;
}

export interface createContestSchema {
  contest_id: string;
  contest_duration: number;
  contest_name: string;
  contest_start_timestamp: number;
  contest_end_timestamp: number;
  participants: Array<object>[];
  contest_status: boolean;
}
