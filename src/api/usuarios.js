import axios  from "axios";
import conexion from "./conexion";

const recurso=conexion.url+"ConfigPerfil/usuario/"

const ValidarUsuario = (params) => {
    try {
        return axios.get(recurso+"validar", {params}, conexion.headers)
            .then(function (response) {
                return response.data;
            })
    } catch (error) {
        console.error(error);
    }
}




export default {ValidarUsuario}