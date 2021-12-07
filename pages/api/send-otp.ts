import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";

export default withIronSessionApiRoute(sendMessageRoute, sessionOptions);

export async function sendMessageRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, otp: cachedOTP } = req.session.user || {};

  if (!phone || !cachedOTP || req.body?.otp !== cachedOTP) {
    res.status(500).json({ message: "Session expired!" });
  }

  res.status(200).json({ ...req.session.user, isLoggedIn: true });
}
