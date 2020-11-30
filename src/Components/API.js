export const fetchMeteorites = (filter, query) => {
    const qParams = filter && query ? `?${filter}=${query}` : "?name=Aachen";
    return fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json${qParams}`)
        .then(res => res.json())
        .then(data => data)
}