import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";

export default withIronSessionApiRoute(sendMessageRoute, sessionOptions);

export async function sendMessageRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, otp: cachedOTP } = req.session.user || {};

  if (!phone || !cachedOTP) {
    req.session.destroy();
    return res.status(500).json({ message: "Session expired!" });
  }

  if (req.body?.otp !== cachedOTP) {
    return res.status(500).json({ message: "Invalid Code!" });
  }

  req.session.user = { isLoggedIn: true, phone };
  await req.session.save();
  return res.status(200).json({ ...req.session.user, isLoggedIn: true });
}
