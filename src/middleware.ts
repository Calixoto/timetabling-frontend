import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("@timetabling-token-auth");

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      if (!token)
        return NextResponse.redirect(new URL("/auth/login", request.url));
      return NextResponse.next();
    }

    if (token) return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.next();
  }
}
