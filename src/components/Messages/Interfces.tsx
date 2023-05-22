export interface Message {
  id?: string;
  videoId: string;
  userId: string;
  commentText: string | undefined;
  date: string;
  votes?: number;
  userVoted?: boolean;
}
