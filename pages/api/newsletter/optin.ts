import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

// Supabase Setup
// ============
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
// ============

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
}

const controllerByMethod = {
  async POST(request: NextApiRequest, response: NextApiResponse) {
    response
      .status(httpStatus.Success)
      .json({ message: "Post request!" })
  },
  async GET(request: NextApiRequest, response: NextApiResponse) {
    const { data, error } = await dbClient
        .from("newsletter_users")
        .select("*");

    response
      .status(httpStatus.Success)
      .json({ message: "Get request!", total: data.length })
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
