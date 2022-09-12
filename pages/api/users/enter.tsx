import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";


// twilio 설정
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
  ) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  
  //token 생성
  const randomToken = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      //Model - token.payload 레코드 생성
      payload: randomToken,
      //Model - token.user == User 레코드 생성
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: { // 존재하지 않을 때 만든다.
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  })
  console.log(token);

  // ## twilio mms 보내기
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!, //phone, 원래는 전화번호 req 받은 값
      body: `your login token is ${randomToken}.`,
    });
    console.log(message);
  }
  
  return res.status(200).json({
    ok: true,
  });
}

export default withHandler("POST", handler);
