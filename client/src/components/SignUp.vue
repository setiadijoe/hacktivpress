<template>
  <form @submit.prevent="register()">
    <div class="form-group">
      <label class="col-form-label">Name</label><br>
      <input type="text" v-model="signUp.name">
    </div>
    <div class="form-group">
      <label class="col-form-label">UserName</label><br>
      <input type="text" v-model="signUp.username">
    </div>
    <div class="form-group">
      <label class="col-form-label">Password</label><br>
      <input type="password" v-model="signUp.password">
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      signUp: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$http.post('/users/signup', this.signUp)
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
