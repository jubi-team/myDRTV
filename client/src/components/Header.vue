<template>
  <!--Navbar-->
  <mdb-navbar class="unique-color-dark" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand href="https://mdbootstrap.com/">DRTV</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item active>
          <router-link to="/home">Home</router-link>
        </mdb-nav-item>
        <mdb-nav-item>
          <router-link to="/watchlist">Watchlist</router-link>
        </mdb-nav-item>
        <mdb-nav-item>
          <router-link to="/login">Login</router-link>
        </mdb-nav-item>
        <mdb-nav-item>
          <router-link to="/register">Register</router-link>
        </mdb-nav-item>
        <!-- User Account -->
      </mdb-navbar-nav>

      <router-link to="/account">
        <mdb-icon icon="user"/>
      </router-link>
      <!-- Search  -->

      <router-link to="/search">
        <mdbIcon icon="search"/>
      </router-link>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem,
  mdbFormInline,
  mdbIcon
} from "mdbvue";

export default {
  name: "Header",

  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbFormInline,
    mdbInput,
    mdbIcon
  }
};
</script>


<style lang="scss">
#header {
  margin-bottom: 70px;
}
body.search {
  nav {
    background-color: transparent !important;
    box-shadow: none;
    color: #fff;
  }

  // #navbarSupportedContent {
  //   a {
  //     color: black;
  //   }
  // }
}

.nav-link {
  a {
    color: #fff;
  }
}
i.fa-user {
  color: #fff;
  padding-right: 10px;
}

i.fa-search {
  color: #fff;
}
</style> 




