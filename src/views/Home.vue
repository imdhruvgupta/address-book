<template>
  <div class="home">
      <h1 class="display-5" style="display: inline;">Address Book</h1>
      <button class="btn btn-primary btn-lg mr-5 mt-3" style="display: inline-end; float: right" v-b-modal.modal-1>Add New</button>
      <p class="lead">Hey there, which address you want to look up today?</p>
      <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Street Address</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(address) in addresses" :key="address.id">
                <th scope="row">{{address.id}}</th>
                <td>{{address.name}}</td>
                <td>{{address.phone}}</td>
                <td>{{address.streetAddress}}</td>
                <td>
                  <router-link :to="'/edit/' + address.id">
                    <b-button>Edit</b-button>
                  </router-link>
                </td>
              </tr>
          </tbody>
      </table>
      <AddEntry />
  </div>
</template>

<script>
import AddEntry from '../components/AddEntry';

export default {
  name: 'Home',
  components: {
    AddEntry
  },
  computed: {
    addresses() {
      return this.$store.state.addresses;
    }
  },
}
</script>
