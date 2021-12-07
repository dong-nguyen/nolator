import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";
import twilio from "twilio";
import random from "lodash/random";
import { CacheManager } from "lib/cache";

export default withIronSessionApiRoute(sendMessageRoute, sessionOptions);

export async function sendMessageRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accountSID = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
  const otp = random(0, 999999).toString().padStart(6, `0`);
  const message = `Your OTP code is: ${otp}`;

  try {
    const { phone } = req.body;
    const client = twilio(accountSID, authToken);

    await client.messages.create({
      from: phoneNumber,
      to: phone,
      body: message,
    });

    req.session.user = { isLoggedIn: false, phone, otp };
    await req.session.save();
    res.json({
      success: true,
      message: "OTP code has been sent to your phone number",
    });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
