<template>
  <div @submit.prevent="">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Name</label>
      <input type="text" class="form-control" v-model="signUp.name">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">UserName</label>
      <input type="text" class="form-control" v-model="signUp.username">
    </div>
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">Password</label>
      <input type="password" class="form-control" v-model="signUp.password">
    </div>
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
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
    
  }
}
</script>

<style>

</style>
