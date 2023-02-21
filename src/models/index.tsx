interface LaunchesEventsType {
    id: number | string,
    provider: string
}

export interface IArticle {
    id: number | string,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    updatedAt: string,
    featured: boolean,
    launches: LaunchesEventsType[],
    events: LaunchesEventsType[]
}
