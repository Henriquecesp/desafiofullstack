const axios = require("axios");

exports.resolvers = {
  Query: {
    getQuestions(_, params) {
      const api = "https://api.stackexchange.com/2.2";
      const method = "questions";
      const site = "&site=stackoverflow";
      const order = "&order=desc";
      const filter = "&filter=default";
      const score = `&min=${params.score || 0}`;
      const sort = `&sort=${params.sort || "votes"}`;
      const limit = `&pagesize=${params.limit || 6}`;
      const tags = `&tagged=${params.tags}`;

      return axios
        .get(
          `${api}/${method}?${site}${order}${score}${sort}${limit}${tags}${filter}`
        )
        .then((res) => {
          return res.data.items.map((question) => {
            return question;
          });
        })
        .catch((err) => {
          return err.response.data;
        });
    },
  },
};
