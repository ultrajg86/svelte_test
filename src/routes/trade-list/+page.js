/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const response = await fetch(`https://3000-monospace-nestjs-test-1710831261738.cluster-76blnmxvvzdpat4inoxk5tmzik.cloudworkstations.dev/api/v1`);

    console.log(await response.ok);

    // const result = await response.json();
    console.log(await response.json());
    
    return {
        sections: [
            { slug: 'profile', title: '프로필' },
            { slug: 'notifications', title: '알림' }
        ]
    };
}