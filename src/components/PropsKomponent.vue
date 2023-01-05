<script>
export default {
  props: {
    daneTekstowe: String,
    daneLiczbowe: Number
  }
}
</script>

<template>
    <p>To jest komponent zawierający propsy:</p>
    <ul>
        <li>daneTekstowe, o wartości = {{ daneTekstowe }}</li>
        <li>daneLiczbowe, o wartości = {{ daneLiczbowe }}</li>
    </ul>
</template>