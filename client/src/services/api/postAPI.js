import axios from "axios";

const postAPI = {
  getPosts: async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_BASE_URL + "/posts");
      return res;
    } catch (err) {
      return err;
    }
  },
  getPost: async (id) => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL + `/posts/${id}`
      );
      return res;
    } catch (err) {
      return err;
    }
  },
};

export default postAPI;
