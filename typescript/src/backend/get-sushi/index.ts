import { IncomingMessage, ServerResponse } from "http";
import url from "url";

import { ParsedUrlQuery } from "querystring";
import { Sushi } from "../../../types";
import { availableTypesOfSushi } from "../all";
import { getSushi } from "./getSushi";

const validateQuery = (query: ParsedUrlQuery): Pick<Sushi, "type"> => {
  if (!query.type || Array.isArray(query.type)) {
    throw Error("Invalid query string");
  }

  if (availableTypesOfSushi.indexOf(query.type) === -1) {
    throw Error("Sushi not found 🤔");
  }

  return query as Pick<Sushi, "type">;
};

export default (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  try {
    const { type } = validateQuery(url.parse(req.url || "", true).query);
    res.end(JSON.stringify(getSushi(type)));
  } catch (error) {
    res.end(error);
  }
};
