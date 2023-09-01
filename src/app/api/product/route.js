import { NextResponse } from "next/server";
import { headers } from "next/headers";

// export async function POST(req, res) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   return NextResponse.json({
//     msg: "Hello GET",
//     id: id,
//   });
// }

export async function GET(req, res) {
    const resBody = await req.json();
  const headerData = headers();
  const resForm = await req.formData();
  const cookiesData = req.cookies.get("data");

  //   let name = resBody["name"];
  let id = resForm.get("id");
  let token = headerData.get("token");

  return NextResponse.json(
    [
      {
        msg: "Hello POST",
        // name: name,
        id: id,
        token: token,
        cookiesData: cookiesData,
      },
    ],
    {
      status: 200,
      headers: { "Set-Cookie": "120%mjn", myToken: "120%1200000" },
    }
  );
}
