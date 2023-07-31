import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  apiRoutes: [],
  afterAuth() {},
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
