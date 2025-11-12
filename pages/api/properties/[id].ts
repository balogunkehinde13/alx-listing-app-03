import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing property ID" });
  }

  try {
    const response = await axios.get(
      `https://zillow-working-api.p.rapidapi.com/custom_ag/byzpid?zpid=${id}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
          "X-RapidAPI-Host": "zillow-working-api.p.rapidapi.com",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error fetching property:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to fetch property details" });
  }
}
