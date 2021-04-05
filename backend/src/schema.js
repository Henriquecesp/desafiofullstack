exports.typeDefs = `
  enum Sort {
    activity
    votes
    creation
    hot
    week
    month
  }
  type Owner {
    reputation: Int
    user_id: Int
    user_type: String
    profile_image: String
    display_name: String
    link: String
  }
  type Question {
    question_id: ID!
    tags: [String]
    owner: Owner
    is_answered: Boolean
    view_count: Int
    answer_count: Int
    score: Int
    last_activity_date: Int
    creation_date: Int
    content_license: String
    link: String
    title: String
  }
  type Query {
    getQuestions(
      limit: String
      score: String
      sort: Sort
      tags: String!
    ): [Question]
  }
`;
