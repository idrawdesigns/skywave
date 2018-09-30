<template>
    <div class="wrapper">
        <nav class="nav">
            <div class="logo">
                <img src="@/assets/images/logo_use.png" alt="">
            </div>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/employers">Employers</router-link>
                    </li>
                    <li>
                        <router-link to="/jobseekers">Jobseekers</router-link>
                    </li>
                    <li>
                        <router-link to="/contacts">Contacts</router-link>
                    </li>
                    <span>
                        <li>
                            <router-link to="/admin-login">
                                Admin Login
                            </router-link>
                        </li>
                    </span>
                </ul>
        </nav>
        <router-view />
    </div>

</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  text-transform: uppercase;
}

.logo img {
  width: 60px !important;
  height: 58px !important;
  margin-left: 10px;
  /* display: block !important; */
  text-indent: -9999px !important;
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  list-style: none;
}

span {
  background: var(--mypurple);
  padding: 20px;
}
span a {
  color: #ffffff !important;
}

span li {
  margin-right: 5px !important;
  margin-left: 15px !important;
}

li {
  margin-right: 30px;
}

ul a {
  text-decoration: none;
  color: var(--grey);
}

ul a.router-link-exact-active {
  color: var(--dark-blue);
}
</style>
