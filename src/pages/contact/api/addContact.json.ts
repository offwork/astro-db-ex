import type { APIRoute } from "astro";
import { Contact, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    const { name, lastName, email, phone, message } = data;

    if (!name || !lastName || !email || !phone || !message ) {
      return new Response(
        JSON.stringify({
          message: "Please provide all required fields.",
          success: false,
        }),
        {
          status: 404,
        }
      );
    }

    const res = await db.insert(Contact).values({
      name,
      lastName,
      email,
      phone,
      message,
    });

    if (res) {
      return new Response(
        JSON.stringify({
          message: "success",
          data: res,
          success: true,
        }),
        {
          status: 200,
        }
      );
    } else {
      throw new Error("There was a problem with the db response.");
    }
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: e,
        success: false,
      }),
      {
        status: 404,
      }
    );
  }
};