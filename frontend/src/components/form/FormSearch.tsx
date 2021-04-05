import React from "react";

const FormSearch = (): JSX.Element => {
  return (
    <section className="container px-5 pb-20 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          StackOverflow
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Stack Overflow é um site de perguntas e respostas para profissionais e
          entusiastas na área de programação de computadores.
        </p>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Faça uma busca utilizando os filtros abaixo.
        </p>
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="tag" className="leading-7 text-sm text-gray-400">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="limit" className="leading-7 text-sm text-gray-400">
            Limit
          </label>
          <input
            type="text"
            id="limit"
            name="limit"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="score" className="leading-7 text-sm text-gray-400">
            Score
          </label>
          <input
            type="text"
            id="score"
            name="score"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative sm:mb-0 flex-grow w-full">
          <label htmlFor="sort" className="leading-7 text-sm text-gray-400">
            Sort
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 p-2 px-3 transition-colors duration-200 ease-in-out"
          >
            <option className="text-gray-900">activity</option>
            <option className="text-gray-900">votes</option>
            <option className="text-gray-900">creation</option>
            <option className="text-gray-900">hot</option>
            <option className="text-gray-900">week</option>
            <option className="text-gray-900">month</option>
          </select>
        </div>
        <br />
        <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg w-full">
          Buscar
        </button>
      </div>
    </section>
  );
};

export default FormSearch;