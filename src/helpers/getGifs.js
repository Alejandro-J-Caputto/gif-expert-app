


export const getGifs = async (categorie) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=10&api_key=goqwrx305mrNlGQl6xNyApt7LDSQM7as`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}
