<template>
  <div>
      <v-app-bar
          color="#94DF85"
          height="140"

      >


          <template v-slot:image>
              <img src="../assets/logofund.png"
                   height="100" width="100"
                   style="background: #177E34; border-radius: 60px; margin: 10px 30px; "
              />
          </template>

          <template v-slot:append>
              <div>
                  <v-btn>
                      <v-icon size="40" style="margin: 0 10px">mdi-account-details-outline</v-icon>
                      Perfil
                  </v-btn>
                  <v-btn >
                      <v-icon size="40" style="margin: 0 10px">mdi-logout</v-icon>
                      Cerrar session
                  </v-btn>
              </div>
          </template>
          <template v-slot:extension >
              <div style="background: white; width: 100%; height: 80px;">
                  <v-row no-gutters >
                      <v-spacer></v-spacer>
                      <v-btn class="text1">
                          Cursos
                      </v-btn>
                      <v-btn class="text1">
                          Aportes
                      </v-btn>
                      <v-btn class="text1">
                          Docentes
                      </v-btn>
                      <v-btn class="text1">
                          Estudiantes
                      </v-btn>
                      <v-btn class="text1">
                          Reportes
                      </v-btn>
                      <v-spacer></v-spacer>
                  </v-row>
              </div>
          </template>
      </v-app-bar>
      <v-main style="background: #177E34; height: 100vh; width: 100%;">
      </v-main>
  </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>
.text1{
    text-transform: none;
    height: 65px;
    background: transparent;
    margin: 0 20px;
    font-size: 22px;
}
</style>