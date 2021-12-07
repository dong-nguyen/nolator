import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";

export type User = {
  isLoggedIn: boolean;
  phone: string;
  otp?: string;
};

export default withIronSessionApiRoute(userRoute, sessionOptions);

export async function userRoute(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.session.user?.isLoggedIn) {
    res.json(req.session.user);
  } else {
    res.json({ isLoggedIn: false, phone: "" });
  }
}
