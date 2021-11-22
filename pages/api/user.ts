import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";

export type User = {
  isLoggedIn: boolean;
};

export default withIronSessionApiRoute(userRoute, sessionOptions);

export async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.session.user) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
}
