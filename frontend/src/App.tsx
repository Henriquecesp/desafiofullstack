import React from "react";
import Layout from "./components/layout";
import { useLazyQuery } from "@apollo/client";
import { GET_QUESTION } from "./components/graphql";
import QuestionCard, { Question } from "./components/cards/QuestionCard";
import FormSearch from "./components/form/FormSearch";
import EmptyState from "./components/cards/EmptyState";
import { ReactComponent as Loading } from "./components/assets/loading.svg";
import { QueryParams } from "./components/graphql/types";

function App(): JSX.Element {
  const [getQuestions, { data, called, loading }] = useLazyQuery(GET_QUESTION);

  const handleGetQuestions = (params: QueryParams) => {
    getQuestions({
      variables: {
        tags: `javascript;${params.tags}`,
        score: params.score,
        sort: params.sort,
        limit: params.limit,
      },
    });
  };

  return (
    <Layout>
      <FormSearch getQuestions={handleGetQuestions} />
      {loading && <Loading />}
      {data && !!data.getQuestions[0] ? (
        data.getQuestions.map((question: Question) => (
          <QuestionCard question={question} key={question.question_id} />
        ))
      ) : (
        <EmptyState called={called} loading={loading} />
      )}
    </Layout>
  );
}

export default App;
