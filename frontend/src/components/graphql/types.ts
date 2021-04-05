export enum SORT {
  activity = "activity",
  votes = 'votes',
  creation = "creation",
  hot = "hot",
  week = "week",
  month = "month"
}

export type QueryParams = {
  tags: string
  score: string
  sort: SORT
  limit: string
}