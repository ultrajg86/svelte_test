/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const result = await fetch('http://140.238.8.90:3000/api/v1/lists');
    const lists = await result.json();
    return { lists };
}

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;