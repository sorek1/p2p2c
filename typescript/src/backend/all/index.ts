import { IncomingMessage, ServerResponse } from "http";

// This could be a DB query.
export const availableTypesOfSushi = ["maki", "temaki", "uramaki", "nigiri", "sashimi"];

export default (_: IncomingMessage, res: ServerResponse) => {

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: availableTypesOfSushi,
    }),
  );
};
