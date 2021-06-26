import Head from 'next/head'
export async function getServerSideProps(context) {
    const {time,title,description} = context.query;
    return {
        props: {
            time,
            title,
            description
        }
    }
}
export default function () {
    return (
        <Head>
            <link rel="stylesheet" href="//at.alicdn.com/t/font_2614575_0k9272p6cclf.css"/>
            {/*<meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={description}/>
            <title>{time?(time+' | '):''}{title}</title>*/}
        </Head>
    )
}

