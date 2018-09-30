<template>
  <div class="wrapper">
    <section class="top-container">
      <div class="header-image" id="woman">
        <!-- <img src="@/assets/images/skywave_lady.jpg" alt="man working"> -->
      </div>

      <div class="req-staff">
        <a href="#" class='btn'> REQUEST STAFF</a>
      </div>

      <div class="header-image" id="man">
        <!-- <img src="@/assets/images/man_holding.jpg" alt="man working"> -->
      </div>

      <div class="job-seekers">
        <a href="#" class='btn'> JOB SEEKERS</a>
      </div>
    </section>

    <!--End of Header Section-->

    <!-- Aboout Section -->
    <section class="about">
      <div class="about-text">
        <h3>ABOUT</h3>
        <br>
        <p>Skyways Global Services Ltd is a human resource consultancy firm based in Nairobi, Kenya with plans of opening branches in other East African countries and beyond. We strive to bring efficacy, efficiency and commitment to our work as a firm keen to serve their clientele with utmost dedication and efficiency while endeavoring to provide high quality customer service, through the application of the principles of partnership with our clients.</p>
      </div>
      <div class="about-image">
        <img src="@/assets/images/lady_smiling.jpg" alt="">
      </div>
    </section>

    <!--End of Header Section-->

    <section class="banner-wrapper">
      <div class="learn-more">
        <a href="#" class='btn'> LEARN MORE</a>
      </div>

      <div class="connecting-people">
        <h3>Connecting top
          <span>Talent</span> with top
          <span>Employers</span>
        </h3>
      </div>
    </section>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
}

.wrapper {
  display: grid;
  grid-gap: 0px;
}

.top-container {
  display: grid;
  min-height: 200px;
  grid-template-areas: "woman req-staff man job-sekeers  ";
}

#woman {
  grid-area: woman;
  background: url(.././assets/images/skywave_lady.jpg);
  background-size: cover;
  background-position: center;
}

.req-staff {
  grid-area: req-staff;
  min-height: 400px;
  background: var(--light-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#man {
  grid-area: man;
  background: url(.././assets/images/man_holding.jpg);
  background-size: cover;
  background-position: center;
}

.job-seekers {
  grid-area: job-sekeers;
  background: var(--magenta);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* //---------------------------------------- */

.about {
  display: grid;
  background: linear-gradient(
    to bottom,
    rgba(242, 241, 244, 1) 0%,
    rgba(246, 246, 246, 1) 100%
  );

  grid-template-areas: "about-text about-image";
  grid-template-columns: 1fr 1fr;
}

.about-text {
  grid-area: about-text;
  color: var(--grey);
  margin-top: 40px;
  margin-left: 20px;
  padding: 30px;
}

.about-image {
  grid-area: about-image;
  background-color: rgba(246, 246, 246, 0.2);
}

.banner-wrapper {
  display: grid;
  min-height: 100px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "learn-more connecting-people";
}

.learn-more {
  grid-area: learn-more;
  background: var(--mypurple);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.connecting-people {
  grid-area: connecting-people;
  color: #fff;
  background: var(--dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>



<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
