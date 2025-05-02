// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  if (host === "sydneyot.com" && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/signpad", req.url));
  }
  return NextResponse.next();
}
