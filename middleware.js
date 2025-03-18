// This middlware acts as a protected route for the routes specified in matcher
import { auth } from "./app/_lib/auth"
export const middleware = auth

export const config={
    matcher:["/account"]
}