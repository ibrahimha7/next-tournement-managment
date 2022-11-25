import axios from "axios";

export const Axios = axios.create({
    baseURL: `${process.env.NEXT_BASE_URL}/api/`,
    headers: {'authorization': `Bearer ${process.env.NEXT_STRAPI_TOKEN}`}
  });