<template>
  <main>
    <!-- Hero Image -->
    <div class="hero-img">
        <img class="hero-img" src="@/assets/Engagementimage4.jpg" alt="Jonny and Lisa Engagement" />
    </div>

    <!-- Hero Content with popup button -->
    <section>
      <div style="text-align: center;">
        <h1>We're Getting Married!</h1>
        <h2>18 April 2026, 3:00pm | Langkloof Roses</h2>
        <button class="btn" @click="showPopup = true">The details</button>

        <!-- Popup -->
        <div v-if="showPopup" class="popup">
          <div class="popup-content">
            <button class="close-btn" @click="showPopup = false" aria-label="Close popup">&times;</button>
            <p>We can’t wait to share all the wedding details with you! 💍</p>
            <router-link to="/thedetails" class="btn">This way to the fun ➔</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section>
      <div class="text-block">
        <h3 id="ourstory">Our Story</h3>
        <p>
          We met in 2021 and had our first date at the sweetest little Italian restaurant—great food, easy conversation, and that feeling like something just clicked.
          From that night on, we’ve shared so many amazing moments together: cooking up delicious meals, discovering our favorite wines, and heading off on fun adventures whenever we can.
          Whether we’re exploring a new city or just enjoying a quiet night in, we’re happiest when we’re together.
          <br />
          We feel so lucky to have found each other, and we can't wait to celebrate this next chapter with all of you.
        </p>
        <div style="text-align: center;">xoxo</div>
        <div style="text-align: center;">Jonny & Lisa</div>
      </div>
    </section>

    <!-- Second Image -->
   <img class="secondary-img" src="@/assets/Engagementimage8.jpg" alt="Jonny and Lisa photos" />
  </main>
</template>

<script>
export default {
  name: 'HomeHero',
  data() {
    return {
      showPopup: false
    }
  }
}
</script>
