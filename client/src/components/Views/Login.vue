<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-8 login-card">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title class="text-center">Please Login</mdb-card-title>
            <form class="grey-text">
              <mdb-input type="email" @input="handleInput" id="email" label="Your email"/>

              <mdb-input type="password" @input="handleInput" id="passwd" label="Your password"/>
            </form>
            <div class="text-center py-4 mt-3">
              <mdb-btn color="cyan">Login</mdb-btn>
            </div>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbCard, mdbCardBody, mdbCardTitle, mdbBtn } from "mdbvue";

export default {
  name: "Login",
  components: { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbInput },
  data() {
    return {};
  },
  methods: {
    handleInput(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
div.login-container {
  div.login-card {
    margin: 0 auto;
  }
}
</style>