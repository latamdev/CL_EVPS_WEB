export interface TeacherCardProps {
  name: string;
  picture: string;
  videosCount: number;
  languages?: Array<Language>;
  description?: string;
}

export interface Language {
  name: string;
  icon: string;
}
