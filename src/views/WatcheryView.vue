<script>
export default {
  data() {
    return {
      dane: '',
      status: 'to jest domyslny status'
    }
  },
  watch: {
    dane(noweDane, stareDane) {
      if (noweDane === 'uruchom') {
        this.zmienStatus()
      }
    }
  },
  methods: {
    async zmienStatus() {
        this.status = 'uruchomiono funkcję zmienStatus'
    }
  }
}
</script>

<template>
    <p>
    Wprowadź słowo "uruchom" a watcher uruchomi funckję zmienStatus która zmieni status.</p>
  <p>
    <input v-model="dane" />
  </p>
  <p>{{ status }}</p>
</template>>