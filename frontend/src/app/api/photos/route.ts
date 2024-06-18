import { NextRequest } from "next/server";

const BASE_URL = "http://localhost:8080";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const res = await fetch(`${BASE_URL}/api/v1/photos?pageNumber=${searchParams.get('pageNumber')}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
