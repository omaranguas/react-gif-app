import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
/* import { getGifs } from '../helpers/getGifs'; */
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ cat }) => {

    /* const [count, setCount] = useState(0) */
    /* const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(cat)
            .then(setImages)
    }, [cat]); */

    const { data: images, loading } = useFetchGif(cat);

    return (
        <>
            <h3>{cat}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {/* <h3>{count}</h3> */}
                {/* <button onClick={() => setCount(count + 1)}></button> */}

                {/* <li key={id}>{title}</li> */}
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

