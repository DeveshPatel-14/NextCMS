import { GraphQLClient } from "graphql-request";

type Response = {
  content: {};
};

const getHygraphData = async (query: string) => {
  try {
    const hygraph = new GraphQLClient(process.env.HYGRAPH_URI);
    const res: Response = await hygraph.request(query);
    return res;

  } catch (err) {
    console.log("Error getting data from hygraph: ", err);
    throw "Error getting data from hygraph"
  }
};

export default getHygraphData;