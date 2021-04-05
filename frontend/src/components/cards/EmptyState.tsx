import React from "react";
import Empty from "../assets/empty.svg";

interface IEmpty {
  called: boolean;
  loading: boolean;
}

const EmptyState = ({ called, loading }: IEmpty): JSX.Element => {
  if (loading) {
    return <></>;
  }

  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:ml-10 md:ml-0 lg:w-1/2 w-full mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={Empty}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          {called ? "Nenhum dado foi encontrado ☹" : "Seja bem vindo 😁"}
          <br />
          <br />
          Faça uma {called && "nova"} busca!
        </h1>
      </div>
    </div>
  );
};

export default EmptyState;
