<script>
export default {
  methods: {
    pokazOknoDialogowe: function (tekst) {
      alert(tekst)
    }
  }
}
</script>

<template>
    <button class="btn btn-primary" v-on:click="pokazOknoDialogowe('tekst okna dialogowego')">Pokaż okno dialogowe używając metody pokazOknoDialogowe.</button>
</template>