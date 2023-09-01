import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await verifyToken(token["value"]);
    let requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (e) {
    console.log("EEEE");
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
