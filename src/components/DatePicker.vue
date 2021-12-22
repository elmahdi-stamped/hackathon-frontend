<template>
  <div>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="date"
            :label="label"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="date"
          :active-picker.sync="activePicker"
          min="1950-01-01"
          @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  mounted() {

  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
    value: function(newValue, oldValue) {
      if (newValue !== oldValue ) {
        if (Date.parse(newValue)) {
          this.date = newValue;
        }
      }
    },
  },
  methods: {
    save (date) {
      console.log(date)
      this.$emit('clicked', date)
    },
  },
}
</script>