<template>
  <section class="venue-page">
    <h1>Babylonstoren</h1>

    <img class="venue-photo" src="@/assets/BabylonstorenWeddingVenue.jpg" alt="Babylonstoren Wedding Venue" />

    <p class="venue-description">
      Babylonstoren is one of our absolute favourite places to wander through
      the stunning gardens, soak in the fresh air, and share a glass of wine
      together. It’s such a special spot that really feels like home to us,
      and we can’t wait to share the magic of this beautiful farm with you on
      our big day.
    </p>

    <div class="map-container">
     <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6629.406482126449!2d18.91714554413444!3d-33.81997054298111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdaec83be87617%3A0xaa9912cd9b78d0d2!2sBabylonstoren!5e0!3m2!1sen!2sza!4v1751392556472!5m2!1sen!2sza"
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <a
      href="https://www.google.com/maps/dir/?api=1&destination=Babylonstoren+South+Africa"
      target="_blank"
      rel="noopener noreferrer"
      class="btn directions-btn"
      >Get Directions</a
    >
  </section>
</template>

<script>
export default {
  name: "VenuePage",
};
</script>

<style scoped>
.venue-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Georgia', serif;
  background-color: #fffaf5;
  color: #333;
  text-align: center;
}

h1 {
  color: #a85664;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.venue-photo {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  margin-bottom: 25px;
}

.venue-description {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 40px auto;
  padding: 0 10px;
  color: #4a3a3a;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  margin-bottom: 30px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

.directions-btn {
  display: inline-block;
  background-color: #a85664;
  color: white;
  padding: 14px 30px;
  font-size: 1.1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.directions-btn:hover {
  background-color: #793149;
}
</style>
