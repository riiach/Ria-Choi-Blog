import { useEffect, useState } from 'react';
import LinkPreview from './LinkPreview.jsx'

const LinkFetch = ({ url }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/link-preview?url=${encodeURIComponent(url)}`)
            .then(res => res.json())
            .then(setData);
    }, [url]);

    if (!data) return null;

    return (
        <LinkPreview
            image={data.images?.[0]}
            title={data.title}
            description={data.description}
            url={data.url}
        />
    );
};

export default LinkFetch;
