// src/middleware.ts or app/middleware.ts

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); // Assuming token is stored in cookies
  const user = request.cookies.get("user"); // Assuming user info is stored in cookies or session

  // Check if the user is not authenticated (token or user info is missing)
  if (request.nextUrl.pathname === "/dashboard" && (!token || !user)) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to continue if the user is authenticated
  return NextResponse.next();
}

// Define the path that the middleware applies to
export const config = {
  matcher: ["/dashboard"], // Apply this middleware to /dashboard route
};
