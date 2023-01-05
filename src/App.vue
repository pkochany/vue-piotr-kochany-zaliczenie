<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="col-md-12">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="height: 40px;">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/komponenty" class="nav-link">Komponenty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sloty" class="nav-link">Sloty</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sass" class="nav-link">SASS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/vif" class="nav-link">v-if + event</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/propsy" class="nav-link">Propsy</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/metody" class="nav-link">Metody</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.active {
  background-color: lightgray;
}
</style>
