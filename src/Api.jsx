import React from "react";
import axios from "axios";

const Api = async (term, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ZewK7P58WzDigx9phPWUCtRu6NaxslbJwVWTt-MM8iM",
    },
    params: {
      query: term,
      page,
      per_page: 12,
    },
  });
  //   console.log(response);
  return response.data.results;
};

export default Api;
