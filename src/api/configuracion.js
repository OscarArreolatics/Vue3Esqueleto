import axios from "axios";
import conexion from "./conexion";

const recurso = conexion.url +"Configuracion"

const ObtenerFecha = async () => {
    try {
        return axios.get( recurso + "/obtener_fecha", conexion.headers)
            .then(function (response) {
                return response.data;
            })
    } catch (error) {
        console.error("Error al obtener la fecha:", error);
    }
}

const ObtenerFechaHora = async () => {
    try {
        return axios.get(recurso + "/obtener_fecha_hora", conexion.headers)
            .then(function (response) {
                return response.data;
            })
    } catch (error) {
        console.error("Error al obtener la fecha:", error);
    }
}


export default { ObtenerFecha, ObtenerFechaHora }