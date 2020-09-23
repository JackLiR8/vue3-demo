<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <anchored-heading>Hello, World</anchored-heading>
</template>

<script>
import AnchoredHeading from './AnchorHeading'

export default {
  name: 'HelloWorld',

  components: {
    AnchoredHeading
  },

  props: {
    msg: String
  },

  data() {
    return {
      count: 0
    }
  }
}
</script>
