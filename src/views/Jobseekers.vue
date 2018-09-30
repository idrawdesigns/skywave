<template>
  <div class="job-container">
    <header>
      <h1>Find your dream Job</h1>
      <h4>browse.apply.
        <span>move</span>
      </h4>
    </header>

    <!-- SEARCH container -->
    <div class="search">
      <form>
        <input type="text" placeholder="Enter job title">
        <input type="text" placeholder="Enter region ">
        <input type="button" value="SEARCH">
      </form>
    </div>

    <section class="jobs">
      <h3>Page is undergoing maintenace, kindly check back later</h3>
    </section>
  </div>

</template>

<style scoped>
h1 {
  font-size: 3rem;
}

h4 {
  font-size: 1.5rem;
  color: var(--dark-blue);
}
span {
  font: 900;
  color: var(--grey);
}
header {
  display: flex;
  flex-direction: column;
  padding-right: 10%;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: url(.././assets/images/job.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: block !important;
  text-indent: -9999px !important;
  z-index: 999;
}
.search {
  width: 100%;
  padding: 40px;
  background-color: var(--dark-blue);
}
input {
  width: 30%;
  background: rgba(255, 255, 255, 0.9);
  color: #ffff;
  align-content: center;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 10px 10px;
  margin-right: 20px;
  margin-bottom: 20px;
}

input[type="button"] {
  background: var(--light-blue);
  border: none;
  color: #ffff;
}

.jobs {
  height: 400px;
  background-color: var(--offwhite);
}
</style>
