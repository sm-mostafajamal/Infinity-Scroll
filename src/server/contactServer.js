import axios from "axios";

const baseURL = "https://contact.mediusware.com/api/contacts/";
// https://contact.mediusware.com/api/contacts/?page=2"

export const getAll = (page) => {
  return axios
    .get(baseURL, {
      params: {
        page: page,
      },
    })
    .then((res) => res.data);
};
