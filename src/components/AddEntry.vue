<template>
  <div class="new">
    <b-modal id="modal-1"
       title="Add an Address"
       ok-title="Save"
       @ok='handleOk'
       @show='resetModal'
       ok-only
      >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        
        <b-form-group
          :state="nameState"
          label="Name"
          invalid-feedback="Name is required"
          class="col-md-12"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
            class="col-md-12"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="phoneState"
          label="Phone"
          invalid-feedback="Phone is required"
          class="col-md-12"
        >
          <b-form-input
            id="phone-input"
            v-model="phone"
            :state="phoneState"
            type="number"
            required
            class="col-md-12"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="addressState"
          label="Street Address"
          invalid-feedback="Address is required"
          class="col-md-12"
        >
          <b-form-textarea
            id="address-input"
            v-model="streetAddress"
            :state="addressState"
            required
            class="col-md-12"
          ></b-form-textarea>
        </b-form-group>

      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddEntry',
  data() {
    return {
      name: '',
      phone: '',
      streetAddress: '',
    }
  },
  computed: {
      nameState() {
        return this.name.length ? true : false
      },
      phoneState() {
        return this.phone ? true : false
      },
      addressState() {
        return this.streetAddress ? true : false
      }
    },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      return valid;
    },
    resetModal() {
      this.name = ''
      this.phone = ''
      this.streetAddress = ''
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }

      this.$store.commit('addAddress', {
        id: this.$store.state.nextId,
        name: this.name,
        phone: this.phone,
        streetAddress: this.streetAddress
      })

      this.$nextTick(() => {
         this.$bvModal.hide('modal-1')
      })
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      
      this.handleSubmit()
    },
    
  },
}
</script>