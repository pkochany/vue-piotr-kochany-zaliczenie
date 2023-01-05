<script>
import PropsKomponent from '../components/PropsKomponent.vue'

export default {
  components: {
    PropsKomponent
  },
  data() {
  	return {
	    licznik: 0
  	}
	}
}
</script>

<template>
    <PropsKomponent daneTekstowe="licznik" :daneLiczbowe="licznik" />
    <button class="btn btn-primary" @click="licznik += 1">dodaj 1 do propsu dziecka</button>
    <button class="btn btn-secondary" @click="licznik -= 1">odejmij 1 do propsu dziecka</button>
</template>