<template>
  <div class="fondo">
      <div class="center">
          <v-row no-gutters>
              <div class="primero">

                  <v-row no-gutters style=" padding: 50px; width: 100%;">

                      <div>
                          <img style="background: #177E34; border-radius: 60px" src="./assets/logofund.png" height="120" width="120"/>

                      </div>


                      <v-spacer></v-spacer>
                      <div style="text-align: center; font-size: 25px">
                          "FUNDACIÓN EDUCAR PARA LA VIDA"
                          <br>
                          se sostiene en tres pilares profundamente
                          <br>
                          ligados e indisolubles:
                      </div>
                      <v-spacer></v-spacer>

                  </v-row>
                  <v-row no-gutters style=" width: 100%; padding: 10px;">

                      <v-spacer></v-spacer>
                      <v-card color="transparent">
                          <v-card-title style="width: 300px; text-align: center;">
                              <br>
                              <h2 >LA EDUCACION</h2>
                              <br>
                              <img style="border-radius: 100px; border: 5px solid #177E34;" src="./assets/img1.jpeg" height="200" width="200"/>

                          </v-card-title>
                          <br>
                          <v-card-text
                              style="width: 300px; border: 5px solid #177E34; border-radius: 25px; "
                              >
                              <h5 style="text-align: center; font-size: 18px">Como el
                                  arte y el servicio de
                                  encaminar a las nuevas
                                  generaciones a una vida
                                  plena. Una educación
                                  desde, en y para la vida
                                  plena.</h5>
                          </v-card-text>

                      </v-card>


                      <v-spacer></v-spacer>

                      <v-card color="transparent">
                          <v-card-title style="width: 300px; text-align: center;">
                              <br>
                              <h2 >LA VIDA</h2>
                              <br>
                              <img style="border-radius: 100px; border: 5px solid #177E34;" src="./assets/img2.png" height="200" width="200"/>

                          </v-card-title>
                          <br>
                          <v-card-text
                              style="width: 300px; border: 5px solid #177E34; border-radius: 25px; "
                              >
                              <h5 style="text-align: center; font-size: 18px">Como el
                                  Como el don y el
                                  compromiso más
                                  importante de las
                                  personas. Educamos para
                                  mejorar integralmente la
                                  calidad de la vida de todo
                                  ser humano, especialmente
                                  de las personas de escasos
                                  recursos.
                              </h5>
                          </v-card-text>

                      </v-card>

                      <v-spacer></v-spacer>

                      <v-card color="transparent">
                          <v-card-title style="width: 300px; text-align: center;">
                              <br>
                              <h2 >EL SERVICIO</h2>
                              <br>
                              <img style="border-radius: 100px; border: 5px solid #177E34;" src="./assets/img3.jpeg" height="200" width="200"/>

                          </v-card-title>
                          <br>
                          <v-card-text
                              style="width: 300px; border: 5px solid #177E34; border-radius: 25px; "
                              >
                              <h5 style="text-align: center; font-size: 18px">Como el
                                  Como la
                                  estrategia y el perfil de
                                  nuestro accionar.
                                  "Vivimos para servir"
                              </h5>
                          </v-card-text>

                      </v-card>
                      <v-spacer></v-spacer>

                  </v-row>

              </div>
              <v-spacer></v-spacer>
              <div class="segundo">
                  <v-card color="transparent" height="100%">
                      <br>
                      <br>
                      <v-card-title>
                          <h2>Inicio de sesión</h2>
                      </v-card-title>
                      <br>
                      <br>
                      <v-card-text>
                          <v-tabs
                                  v-model="tab"
                                  color="white"
                          >
                              <v-tab value="user">Usuario</v-tab>
                              <v-tab value="estudent">Estudiante</v-tab>
                          </v-tabs>
                          <br>
                          <br>
                          <br>
                          <v-window v-model="tab">
                              <v-window-item value="user">
                                  <br>
                                  <br>
                                  <br>
                                  <v-text-field
                                          label="Correo"
                                          variant="outlined"
                                          rounded
                                          type="email"
                                  ></v-text-field>
                                  <br>
                                  <br>
                                  <v-text-field
                                          label="Contraseña"
                                          variant="outlined"
                                          rounded
                                          type="password"
                                  ></v-text-field>
                                  <br>
                                  <br>
                                  <br>
                                  <br>
                                  <v-btn
                                          color="#177E34"
                                          rounded
                                          style="color: white"
                                          height="50px"
                                          block
                                  >
                                      Ingresar
                                  </v-btn>
                              </v-window-item>

                              <v-window-item value="estudent">
                                  <br>
                                  <br>
                                  <br>
                                  <v-text-field
                                          label="Correo"
                                          variant="outlined"
                                          rounded
                                          type="email"
                                  ></v-text-field>
                                  <br>
                                  <br>
                                  <v-text-field
                                          label="Contraseña"
                                          variant="outlined"
                                          rounded
                                          type="password"
                                  ></v-text-field>
                                  <br>
                                  <br>
                                  <br>
                                  <br>
                                  <v-btn
                                          color="#177E34"
                                          rounded
                                          style="color: white"
                                          height="50px"
                                          block
                                  >
                                      Ingresar
                                  </v-btn>
                              </v-window-item>


                          </v-window>
                      </v-card-text>
                  </v-card>

              </div>
          </v-row>
      </div>

  </div>
</template>

<script>
export default {
    name: "LoginI",
    data:() => ({
        tab: null,
    })
}
</script>

<style scoped>

.fondo{
    background: #177E34;
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}
.center {
    background: white;
    width: 94%;
    height: 90vh;
    border-radius: 50px;
}
.primero{
    width: 70%;
    height: 90vh;
}
.segundo{
    background: #94DF85;
    width: 30%;
    height: 90vh;
    border-radius: 50px;
    text-align: center;

}
</style>