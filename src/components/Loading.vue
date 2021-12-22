<template functional>
  <div class="text-center">
    <v-progress-circular
        indeterminate
        :color="$options.randomColor()"
        :size="70"
        :width="7"
        :key="Math.floor(Math.random() * 5000)"
    ></v-progress-circular>
  </div>
</template>
<script>
  export default {
    name: 'loading',
    randomColor() {
      const colors = ['primary', 'red', 'purple', 'green', 'amber', 'pink', 'orange', 'blue', 'indigo', 'teal', 'cyan', 'lime', 'yellow', 'deep-orange', 'brown', 'grey', 'black'];
      const randomColor = Math.floor(Math.random() * 17);
      return colors[randomColor] || 'orange';
    }
  }
</script>