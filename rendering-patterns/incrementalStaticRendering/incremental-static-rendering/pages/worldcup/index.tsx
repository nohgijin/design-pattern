export default function WorldCup( {time}: {time:any} ){
    return <div>{time.utc_datetime}</div>
}

export async function getStaticProps() {
    const res = await fetch('https://worldtimeapi.org/api/ip');
    const time = await res.json();
    return {
        props: {
            time
        },
        revalidate: 5
    };
}