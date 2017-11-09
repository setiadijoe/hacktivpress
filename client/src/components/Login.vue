<template>
  <div>
    <div class="form-group">
      <label class="col-form-label" >UserName</label><br>
      <input type="text" v-model="login.username">
    </div>
    <div class="form-group">
      <label class="col-form-label" >Password</label><br>
      <input type="password" v-model="login.password">
    </div>
    <button type="submit" class="btn btn-primary">Sign In</button>
    <small>Don't have any account? Click Sign Up</small>
    <router-link to="/register" type="submit" class="btn btn-secondary">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
