export const getGifs = async (cat) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=20&api_key=Hh2M0MJa6ek7FPUK1IrGxqVtnJt4vaMR`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    /* console.log(gifs); */
    return gifs;
}