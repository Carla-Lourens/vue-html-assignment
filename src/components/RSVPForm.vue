<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input id="name" :placeholder="namePlaceholder" v-model="name" />
      <div v-if="errors.name" class="error">{{ errors.name }}</div>

      <label for="email">Email</label>
      <input id="email" type="email" :placeholder="emailPlaceholder" v-model="email" />
      <div v-if="errors.email" class="error">{{ errors.email }}</div>

      <label for="song">Song Recommendation</label>
      <textarea
        id="song"
        :placeholder="songPlaceholder"
        v-model="songRecommendation"
        rows="5"
      ></textarea>

      <button type="submit">{{ buttonLabel }}</button>
    </form>

    <!-- Inline Modal -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <p>Thank you! Your RSVP has been sent. 🥂</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RSVPForm',
  props: {
    namePlaceholder: {
      type: String,
      default: 'Your Full Name'
    },
    emailPlaceholder: {
      type: String,
      default: 'you@example.com'
    },
    songPlaceholder: {
      type: String,
      default: 'Recommend a song for the party playlist...'
    },
    buttonLabel: {
      type: String,
      default: 'Send RSVP'
    }
  },
  data() {
    return {
      name: '',
      email: '',
      songRecommendation: '',
      showModal: false,
      errors: {}
    };
  },
  methods: {
    validate() {
      this.errors = {};
      if (!this.name.trim()) this.errors.name = 'Name is required.';
      if (!this.email.trim()) this.errors.email = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(this.email))
        this.errors.email = 'Email is invalid.';
      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validate()) {
        this.showModal = true;
        this.name = '';
        this.email = '';
        this.songRecommendation = '';
      }
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
/* Reuse your rsvp.css styles here or import them globally */
form {
  max-width: 600px;
  margin: auto;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #a85664;
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: #a85664;
  font-size: 0.9rem;
  margin-top: 4px;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fffaf5;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
</style>
