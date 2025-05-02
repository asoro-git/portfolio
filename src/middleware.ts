// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  if (host === "sydneyot.com" && req.nextUrl.pathname.startsWith("/signpad")) {
    return NextResponse.rewrite(
      `https://effulgent-lolly-8462e0.netlify.app${req.nextUrl.pathname}`,
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
