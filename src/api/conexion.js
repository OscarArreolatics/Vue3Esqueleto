const url=import.meta.env.VITE_API_URL;

const headers={
    'Access-Control-Allow-Origin':"*",
    'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'Access-Control-Allow-Headers': "Content-Type, Authorization, X-Requested-With",
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json'
}
 
export default {url, headers}
