const axios = require("axios");

exports.resolvers = {
  Query: {
    getQuestions() {
      const api = "https://api.stackexchange.com/2.2";
      const method = "questions";

      return axios.get(`${api}/${method}`).then((res) => {
        console.log(data.items);
        return res.data.items.map((question) => {
          return question;
        });
      });
    },
  },
};
