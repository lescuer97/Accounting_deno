import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.152.0/http/file_server.ts";
import { config } from "./deps.ts";
const { PORT } = await config({ safe: true });

console.log({ PORT });
// Deno.read
// const handler = async (request: Request): Response => {
//   return serveFile(request, "./public/index.html");

//   // return new Response(body, { status: 200 });
// };

const controller = (req: Request) => {
  const pathname = new URL(req.url).pathname;
  setTimeout(() => {}, 800000);
  if (pathname == "/") {
    return serveFile(req, "public/index.html");
  }

  if (pathname.startsWith("/")) {
    return serveDir(req, {
      fsRoot: "public",
    });
  }
  return new Response();
};

console.log(`HTTP webserver running. Access it at: http://0.0.0.0:${PORT}/`);
await serve(controller, { port: Number(PORT), hostname: "0.0.0.0" });
