import React from "react";
import { nFormatter } from "../helpers/numberformatter";

type Owner = {
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
};

export type Question = {
  question_id: string;
  tags: string[];
  owner: Owner;
  is_answered: Boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  content_license: string;
  link: string;
  title: string;
};

interface IQuestion {
  question: Question;
}

const QuestionCard = ({ question }: IQuestion): JSX.Element => {
  return (
    <div className="p-4 lg:w-1/3 w-full">
      <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-8 pb-12 rounded-lg overflow-hidden relative">
        <a
          className="inline-flex items-center mb-8 cursor-pointer"
          target="_blank"
          href={question.owner.link}
          rel="noreferrer"
        >
          <img
            alt="blog"
            src={question.owner.profile_image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">
              {question.owner.display_name}
            </span>
          </span>
        </a>
        <div className="text-center flex flex-wrap">
          {question.tags.map((tag, index) => (
            <span
              key={index}
              className="py-1 px-2 m-2 rounded bg-gray-800 text-gray-400 text-opacity-75 text-xs font-medium tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="sm:text-2xl text-xl title-font font-medium text-white mt-4 mb-12 break-words">
          <div dangerouslySetInnerHTML={{ __html: question.title }}></div>
        </h2>
        <div className="flex items-center flex-wrap pb-4 border-b-2 border-gray-800 border-opacity-75 w-full md:absolute md:bottom-5 md:w-11/12 md:left-5">
          <a
            className="text-pink-400 inline-flex items-center cursor-pointer"
            target="_blank"
            href={question.link}
            rel="noreferrer"
          >
            Ver mais
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {nFormatter(Number(question.view_count))}
          </span>
          <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            {nFormatter(Number(question.view_count))}
          </span>
          <span className="text-gray-500 inline-flex items-center leading-none text-sm">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            {nFormatter(Number(question.score))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
