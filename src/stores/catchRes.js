import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notification', () => {
  const timeout = ref(6000);
  const show = ref(false);
  const text = ref('');
  const color = ref('black');
  const mode = ref('multi-line');
  const x = ref('right');
  const y = ref('top');
  const colorBtnClose = ref('pink');

  function showNotification(error) {
    show.value = true;
    text.value = errorHandle(error)
  }

  function errorHandle(error) {
        let mensajeError = ''
        
        if (error.response){
          switch (error.response.status) {
            case 401:/**"Unauthorized" */
                if (error.response.statusText == 'Unauthorized')
                  mensajeError = 'Sin autorización, sin permiso para realizar esta acción.'
                else
                  mensajeError = error.response.statusText
              break;
            case 400:/**Bad Request */
                if (error.response.data.Message)
                  mensajeError = error.response.data.Message
                else 
                  mensajeError = error.response.data
              break;
            case 500:/**Internal Server Error */
              if (error.response.data.ExceptionMessage)
                mensajeError = "Error interno con el servidor, contacte al administrador. " + error.response.data.ExceptionMessage
              else
                mensajeError = "Error interno con el servidor, contacte al administrador. " + error.response.data.Message
              break;
            default:
              if (error.response.data.ExceptionMessage)
                mensajeError = "Error interno con el servidor, contacte al administrador. " + error.response.data.ExceptionMessage
              else if (error.response.data.Message)
                mensajeError = "Error interno con el servidor, contacte al administrador. " + error.response.data.Message
              else
                mensajeError = "Error. " + error.message
              break;
          } 
        }
        else if(error.message) {
          if(error.message === "Network Error")
            mensajeError = "Error al conectarse con el servidor"
          else
            mensajeError = error.message
        }
        return mensajeError
  }

  function setShow(newState) {
    show.value = newState;
  }

  return {
    timeout,
    show,
    text,
    color,
    mode,
    x,
    y,
    colorBtnClose,
    showNotification,
    setShow
  };
});
