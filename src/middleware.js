import { CheckCookieAuth } from "./app/helper/middlewareHelper";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }
}
