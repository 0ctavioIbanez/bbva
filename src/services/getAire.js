export default async () => {
    const route = "https://api.datos.gob.mx/v1/calidadAire";
    const req = await fetch(route);
    return req;
}