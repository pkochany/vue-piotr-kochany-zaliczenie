<script>
import Trojkat from '../components/Trojkat.vue'
import Kwadrat from '../components/Kwadrat.vue'

export default {
  components: {
    Trojkat,
    Kwadrat
  }
}
</script>

<template>
    <div>
        <h3>Przykład stylu z atrybutem scoped, tutaj header jest żółty.</h3>
        <div>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
          <Trojkat/>
          <Kwadrat/>
        </div>
    </div>
</template>

<style scoped>
h3 {
  background-color: yellow;
}
</style>
