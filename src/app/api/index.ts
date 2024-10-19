export const getConfigs = async () => {
    const res = await fetch('http://localhost:3000/api/configs', {next: {revalidate: 0}});
    return await res.json();
}

export const getEvents = async () => {
    const res = await fetch('http://localhost:3000/api/events', {next: {revalidate: 0}});
    return await res.json();
}

export const getImagesFromGallery = async () => {
    const res = await fetch('http://localhost:3000/api/gallery', {next: {revalidate: 0}});
    return await res.json();
}