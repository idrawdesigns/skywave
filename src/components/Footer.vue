<template>
    <footer>
        <div class="container">
            <div class="company">
                <h3>SKYWAVE GLOBAL</h3>
                <p>Connecing Top talent with <br> top employers</p>
            </div>
            <div class="contact">
                <h4>Visit</h4>
                <p>Ruprani House, 2nd floor <br> Suite No 207, Mokktar Daddar Street,
                </p> <br>
                <h4> New Business</h4>
                <p>engage@skywaves.co.ke</p> <br> +254 999 999
            </div>
            <div class="social">
                <h4>Follow us</h4>
                <a href="http://">LinkedIn</a>
                <a href="http://">Facebook</a>
                <a href="http://">Twitter</a>
            </div>
            <div class="legal">
                <h4>Legal</h4>
                <a href="http://">Legal</a>
                <a href="http://">Privacy</a>
            </div>
            <div class="news-letter">
                <h4>Get the Latest Jobs</h4>
                <form method="post" class='form'>
                    <input type="text" class="input" placeholder=" Enter Email">
                    <button type="submit" class="subscribe">Submit</button>
                </form>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style  scoped>
.container {
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: var(--offwhite);
  padding: 20px;
}

.social,
.legal {
  display: flex;
  flex-direction: column;
}

.social,
.legal,
a {
  text-decoration: none;
  color: var(--offwhite);
}

.input,
.subscribe {
}
</style>
