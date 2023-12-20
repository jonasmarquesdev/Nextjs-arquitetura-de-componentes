import { NextApiRequest, NextApiResponse } from "next";

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
}

const controllerByMethod = {
  POST(request: NextApiRequest, response: NextApiResponse) {
    response
      .status(httpStatus.Success)
      .json({ message: "Post request!" })
  },
  GET(request: NextApiRequest, response: NextApiResponse) {
    response
      .status(httpStatus.Success)
      .json({ message: "Get request!" })
  }
}

export default function handler(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  const controller = controllerByMethod[request.method]
  if(!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado" })
    return;
  }

  controller(request, response);
}
