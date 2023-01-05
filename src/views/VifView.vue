<script>
export default {
  data() {
  	return {
	    jestWidoczne: true
  	}
	}
}
</script>

<template>
    <button class="btn btn-primary" @click="jestWidoczne = !jestWidoczne">przycisk z eventem @click</button>

    <h1 class="zielone-tlo" v-if="jestWidoczne">Wartość zmiennej jestWidoczne to prawda.</h1>
    <h1 class="czerwone-tlo" v-else>Wartość zmiennej jestWidoczne to fałsz.</h1>
</template>

<style scoped>
.czerwone-tlo {
    background-color: red;
}
.zielone-tlo {
    background-color: green;
}
</style>