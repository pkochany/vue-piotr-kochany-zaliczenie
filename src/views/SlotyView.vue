<script>
import Slot from '../components/Slot.vue'

export default {
  components: {
    Slot
  }
}
</script>

<template>
    <h3>Przykład stylu z atrybutem scoped, a tutaj zielony.</h3>
    <Slot>
        to jest przykład użycia slotu
    </Slot>
    <Slot>
        kolejny przykład
    </Slot>
    <Slot>
        i kolejny
    </Slot>
</template>

<style scoped>
h3 {
  background-color: green;
}
</style>
