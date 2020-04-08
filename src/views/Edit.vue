<template>
  <div class="edit">
    <h1 class="display-5" style="display: inline;">Edit an address</h1>
    <p class="lead">Hey there, make sure the details are correct before saving.</p>
    <form ref="form" @submit.stop.prevent="handleSubmit">
        
        <b-form-group
          :state="nameState"
          label="Name"
        >
          <b-form-input
            id="name-input"
            v-model="address.name"
            :state="nameState"
            required
            class="col-md-8"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="phoneState"
          label="Phone"
        >
          <b-form-input
            id="phone-input"
            v-model="address.phone"
            :state="phoneState"
            type="number"
            required
            class="col-md-8"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="addressState"
          label="Street Address"
        >
          <b-form-textarea
            id="address-input"
            v-model="address.streetAddress"
            :state="addressState"
            required
            class="col-md-8"
          ></b-form-textarea>
        </b-form-group>

        <button type="submit" class="btn btn-primary">Save</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'edit',
  computed: {
    address() {
      return this.$store.getters.getAddressById(this.$route.params.id);
    }
  },
  methods: {
    handleSubmit: function() {
      this.$store.commit('editAddress', this.address)      
      this.$router.replace('/')
    }
  }
}
</script>