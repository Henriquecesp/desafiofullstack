import React from "react";
import Layout from "./components/layout";
import { useLazyQuery } from "@apollo/client";
import { GET_QUESTION } from "./components/graphql";
import QuestionCard, { Question } from "./components/cards/QuestionCard";
import FormSearch from "./components/form/FormSearch";
import EmptyState from "./components/cards/EmptyState";
import { ReactComponent as Loading } from "./components/assets/loading.svg";

function App(): JSX.Element {
  const [getQuestions, { data, called, loading }] = useLazyQuery(GET_QUESTION, {
    variables: {
      tags: `javascript;`,
    },
  });

  if (data) {
    console.log(data);
  }

  return (
    <Layout>
      {!called && <button onClick={() => getQuestions()}>BUSCAR</button>}
      <FormSearch />
      {loading && <Loading />}
      {data ? (
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
