<template>
  <v-container>
    <div class="d-flex align-center flex-column">
      <v-card tile width="350px" class="rounded-lg">
        <v-card-title class="d-flex justify-center">
          <v-img
            lazy-src="@/assets/logo.png"
            max-height="150"
            max-width="150"
            src="@/assets/logo.png"
          ></v-img>
        </v-card-title>
        <v-card-text>
          <v-form v-model="validoConsultar" ref="formBuscar">
            <v-row>
              <v-col cols="11">
                <v-text-field
                  label="Usuario"
                  prepend-icon="mdi-account"
                  v-model="usuario"
                  @keypress="ValidarExpresion($event, /^e\d*$/i)"
                  @input="(val) => (usuario = usuario.toUpperCase())"
                  :rules="[rules.required]"
                  :maxlength="7"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="11">
                <v-text-field
                  label="Contraseña"
                  prepend-icon="mdi-lock"
                  v-model="password"
                  :append-inner-icon="mostrarIcon(showPassword, password)"
                  @click:append-inner="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="[rules.required]"
                  :maxlength="90"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="outlined"
            prepend-icon="mdi-check-circle-outline"
            @click="ValidarUsuario()"
            :loading="loading"
            :disabled="!activarLogIn()"
          >
            ENTRAR
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import { useNotificationStore } from "@/stores/catchRes";
import usuarios from "@/api/usuarios.js";
import { useToast } from "vue-toastification";
import { ValidarExpresion } from "@/utils/utils";

const toast = useToast();
const storeAuth = useAuthStore();
const storeCatch = useNotificationStore();

// Accede al enrutador
const router = useRouter();

// Variables reactivas
const showPassword = ref(false);
const usuario = ref("");
const password = ref("");
const loading = ref(false);
const validoConsultar = ref(false);

// Reglas de validación
const rules = {
  required: (v) => !!v || "Campo obligatorio.",
};

// Métodos
const ValidarUsuario = async () => {
  loading.value = true;
  usuarios
    .ValidarUsuario({ nomina: usuario.value, password: password.value })
    .then((response) => {
      loading.value = false;
      console.log(response);

      if (response.Nomina) {
        storeAuth.login();
        router.push("/");
        toast.success("Bienvenido");
        return;
      }
      if (response.code == "PERMISSION_DENIED") {
        //storeCatch.showNotification(response);
        toast.warning(response.message,
          {
            position: "top-center",
          });
        usuario.value = "";
        return;
      }
      if (response.code == "WRONG_PASSWORD") {
        //storeCatch.showNotification(response);
        toast.warning(response.message,
          {
            position: "top-center",
          });
        password.value = "";
        return;
      }

      usuario.value = "";
      password.value = "";
    })
    .catch((error) => {
      storeCatch.showNotification(error);
      loading.value = false;
    });
};

function mostrarIcon(showPassword, password) {
  if (password.length > 0) {
    if (showPassword) {
      return "mdi-eye-off";
    }

    if (!showPassword) {
      return "mdi-eye";
    }
  }

  return "";
}

const activarLogIn = () => {
  if (validoConsultar.value) {
    return true;
  }
};
</script>

<style></style>
