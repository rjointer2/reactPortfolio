
import Head from 'next/head'; 

const Meta = (props) => {
    return (
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="
                This is Roosevelt Jointer's Portfolio Site
            " />
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;500&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
    )
}

export default Meta;