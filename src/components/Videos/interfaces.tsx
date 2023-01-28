export interface VideoListResponse {
    offset: number,
    pageNumber: number,
    totalPages: number,
    items: Array<VideoResponse>,
}

export interface VideoResponse {
    id: string,
    title: string,
    description: string,
    status: string,
    poster: string,
    totalSizeBytes: string,
    duration?: any,
    teacher: string,
    level: number,
    courseId: number,
    price: number,
    rating: number,
    tags: Array<Tag>,
}

export interface Tag {
    id: number,
    name: string,
}

export interface Details {
    id?: string,
    title?: string,
    description?: string,
    price?: number,
}