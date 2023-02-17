export type Resource = {
  id: string;
  title: string;
  duration?: number;
  totalPages?: number;
  free?: boolean;
  link?: string;
  price: number;
  description: string;
  image?: string;
  teacher: string;
  level: number;
  salesCount?: number;
  videoId?: string;
  status?: string;
  poster?: string;
  courseId?: number;
  _class?: string;
  tags: Array<ITag>;
};

export type ITag = {
  id: string;
  name: string;
};
