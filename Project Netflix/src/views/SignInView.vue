<template>
  <div class="auth-page">
    <!-- Background -->
    <div class="bg-overlay"></div>

    <!-- Logo -->
    <div class="logo-wrap">
     <router-link :to="{ name: 'home' }" class="navbar-brand logo-brand">
        <div class="logo-box">
          <span class="logo-icon">▶</span>
          <span class="logo-text">3T SAHUR</span>
          <span class="logo-subtitle">KINO</span>
        </div>
      </router-link>
    </div>

    <!-- Auth Card -->
    <div class="auth-container">
      <div class="auth-card">
        <!-- Tabs -->
        <div class="auth-tabs">
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            Log In
          </button>
          <button
            class="tab-btn"
            :class="{ active: activeTab === 'signup' }"
            @click="activeTab = 'signup'"
          >
            Sign Up
          </button>
        </div>

        <!-- Login -->
        <form v-if="activeTab === 'login'" @submit.prevent="login">
          <h2>Welcome Back</h2>
          <p class="subtitle">Log in to continue watching</p>

          <input v-model="loginForm.email" type="email" placeholder="Email" />
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
          />

          <button class="submit-btn">Log In</button>
        </form>

        <!-- Signup -->
        <form v-else @submit.prevent="signup">
          <h2>Create Account</h2>
          <p class="subtitle">Join 3T Sahur Kino today</p>

          <input v-model="signupForm.name" type="text" placeholder="Full Name" />
          <input v-model="signupForm.email" type="email" placeholder="Email" />
          <input
            v-model="signupForm.password"
            type="password"
            placeholder="Password"
          />
          <input
            v-model="signupForm.confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />

          <button class="submit-btn">Create Account</button>
        </form>

        <p v-if="message" class="message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'login' | 'signup'>('login')
const message = ref('')

const loginForm = ref({
  email: '',
  password: ''
})

const signupForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const login = () => {
  if (!loginForm.value.email || !loginForm.value.password) {
    message.value = 'Please fill in all login fields.'
    return
  }

  message.value = `Logged in as ${loginForm.value.email}`
}

const signup = () => {
  if (
    !signupForm.value.name ||
    !signupForm.value.email ||
    !signupForm.value.password ||
    !signupForm.value.confirmPassword
  ) {
    message.value = 'Please fill in all signup fields.'
    return
  }

  if (signupForm.value.password !== signupForm.value.confirmPassword) {
    message.value = 'Passwords do not match.'
    return
  }

  message.value = `Account created for ${signupForm.value.name}`
}
</script>

<style scoped>

.auth-page {
    background: linear-gradient(
    to bottom,
    rgb(255, 0, 0) 40%,
    transparent 100%
  );
  min-height: 100vh;
  position: relative;
  font-family: 'Barlow', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.9)
  );
}

.logo-wrap {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 5;
}

.auth-container {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 430px;
}

.auth-card {
  background: var(--card);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
}

.auth-tabs {
  display: flex;
  margin-bottom: 2rem;
  background: rgba(255,255,255,0.03);
  border-radius: 12px;
  padding: 0.3rem;
}

.tab-btn {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}

.tab-btn.active {
  background: rgba(229, 9, 20, 0.14);
  color: white;
}

h2 {
  color: white;
  margin-bottom: 0.35rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.subtitle {
  color: var(--muted);
  margin-bottom: 1.6rem;
  font-size: 0.9rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: white;
  padding: 0.95rem 1rem;
  border-radius: 12px;
  outline: none;
  font-size: 0.95rem;
  transition: 0.25s;
}

input:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.15);
}

input::placeholder {
  color: #777;
}

.submit-btn {
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #e50914, #ff3344);
  color: white;
  border: none;
  padding: 0.95rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
  transition: 0.25s;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(229, 9, 20, 0.35);
}

.message {
  margin-top: 1rem;
  text-align: center;
  color: #d3d3d3;
  font-size: 0.9rem;
}

/* Logo */
.logo-brand {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.logo-brand:hover {
  transform: scale(1.05);
}

.logo-box { 
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  color: #e50914;
  font-size: 24px;
  text-shadow: 0 0 12px rgba(229, 9, 20, 0.7);
  transition: all 0.3s ease;
}

.logo-brand:hover .logo-icon {
  filter: brightness(1.3);
  text-shadow: 0 0 20px rgba(229, 9, 20, 0.9);
}

.logo-text {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.8rem;
  letter-spacing: 0.15em;
  background: linear-gradient(135deg, #ffffff 0%, #e50914 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  font-weight: 900;
  transition: all 0.3s ease;
}

.logo-subtitle {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #e50914;
  text-transform: uppercase;
  margin-left: -0.35rem;
  margin-top: 2px;
  text-shadow: 0 0 8px rgba(229, 9, 20, 0.5);
}

</style>