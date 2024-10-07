import axios from "axios";
export const fetchImage = async (page = 1, query) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "NwEJ_0gXAq_LGsKWGY--nIsYOkJe1qsNnR4n_p4BDGU",
      page,
      query,
      per_page: 6,
    },
  });
  return data;
};
