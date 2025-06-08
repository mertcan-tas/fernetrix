<template>
  <v-app theme="dark">
    <Appbar></Appbar>
    <Drawer></Drawer>
    <v-main>
      <slot></slot>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>


