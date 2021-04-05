import { gql } from '@apollo/client'

const FRAGMENT_QUESTION = gql`
  fragment QuestionResult on Question {
    question_id
    tags
    owner{
      reputation
      display_name
      profile_image
      link
    }
    view_count
    score
    title
    answer_count
    link
  }
`

export const GET_QUESTION = gql`
  query GetQuestions($tags: String!, $score: String, $sort: Sort, $limit: String){
    getQuestions(tags: $tags, score:$score, sort:$sort, limit: $limit){
      ...QuestionResult
    }
  }
  ${FRAGMENT_QUESTION}
`