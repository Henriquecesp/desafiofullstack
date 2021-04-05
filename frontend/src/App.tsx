import React from "react";
import Layout from "./components/layout";
import { useLazyQuery } from "@apollo/client";
import { GET_QUESTION } from "./components/graphql";
import QuestionCard, { Question } from "./components/cards/QuestionCard";

function App(): JSX.Element {
  const [getQuestions, { data, called }] = useLazyQuery(GET_QUESTION, {
    variables: {
      tags: "javascript",
    },
  });

  if (data) {
    console.log(data);
  }

  return (
    <Layout>
      {!called && <button onClick={() => getQuestions()}>BUSCAR</button>}
      {data &&
        data.getQuestions.map((question: Question) => (
          <QuestionCard question={question} key={question.question_id} />
        ))}
    </Layout>
  );
}

export default App;
