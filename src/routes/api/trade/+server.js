import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request }) => {
  const apiHost = import.meta.env.SERVER_HOST;
  const apiPort = import.meta.env.SERVER_PORT;
  
  return json({'aaaa':apiHost});
};
