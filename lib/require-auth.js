import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

/**
 * Check if the current request is authenticated.
 * Returns the session if authenticated, null otherwise.
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);
  return session;
}
