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
            <RouterLink to="/calendar" class="nav-link">Calendar</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/chat" class="nav-link">Chat</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/drive" class="nav-link">Drive</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/mail" class="nav-link">Mail</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/meeting_room" class="nav-link">Meeting room</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/settings" class="nav-link">Settings</RouterLink>
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
