export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${address}`,
    {
      headers: {
        "User-Agent": "Delta-real-estate-app",
        Accept: "application/json",
      },
    }
  );

  const data = await res.json();

  return Response.json(data);
}