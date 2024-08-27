import instance from ".";

const getAllPosts = async () => {
  const response = await instance.get("posts/"); //https://jsonplaceholder.typicode.com/posts/
  return response.data;
};

export { getAllPosts };
