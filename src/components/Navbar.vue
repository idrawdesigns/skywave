<template>
    <nav>
        <div class="wrapper">
            <div class="logo">
                <h4>LOgo Here</h4>
            </div>
            <div class="menu">
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
            </div>
        </div>
        <router-view/>
    </nav>

</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style  scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: var(--offwhite);
  font-weight: 600;
  text-transform: uppercase;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
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

.menu a {
  text-decoration: none;
  color: var(--grey);
}

.menu a.router-link-exact-active {
  color: var(--dark-blue);
}
</style>
