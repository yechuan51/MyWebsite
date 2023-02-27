export async function GET(request: Request): Promise<Response> {
  console.log(request);
  return new Response("Hello, Next.js!");
}
