export const getTodos = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Getting todos",
    }),
  };
};

