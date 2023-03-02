export default function WorldCup( {time}: {time:any} ){
    return <div>{time.utc_datetime}</div>
}

export async function getStaticProps() {
    // API Call to get current time
    const res = await fetch('https://worldtimeapi.org/api/ip');
    const time = await res.json();
    return {
        props: {
            time
        },
        // Regenerate the page after 5 seconds
        revalidate: 5
    };
}