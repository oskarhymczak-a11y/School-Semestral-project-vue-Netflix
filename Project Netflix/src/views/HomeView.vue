//To jest 1 view pozniej doda sie wiecej to,bedzie main strona naszej aplikacji i stad bedzie routing na wszytkie inne podstrony
// NOTE Ja to zrobie jak cos bo juz jestem zainwestowany -- Oskar

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavLink {
  label: string
  routeName: string
}

const scrolled = ref(false)
const activeNav = ref('Home')
const activeGenre = ref('All')

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'Home', routeName: 'home' }, 
  { label: 'Movies', routeName: 'home' }, // TODO Temp link to home until Movies exists
  { label: 'Series', routeName: 'home' }, // TODO Temp link to home until Series exists
  { label: 'LogIn', routeName: 'signin' }
]

</script>


<template>
  <div class="header-wrapper">
    <!-- navbar -->
    <nav
      class="navbar navbar-expand-lg fixed-top cinema-nav"
      :class="{ 'nav-scrolled': scrolled }"
    >
      <div class="container-fluid px-4">
        <!-- Logo -->
       <router-link :to="{ name: 'home' }" class="navbar-brand logo-brand">
        <div class="logo-box">
          <span class="logo-icon">▶</span>
          <span class="logo-text">3T SAHUR</span>
          <span class="logo-subtitle">KINO</span>
        </div>
      </router-link>

        <!-- Mobile toggler -->
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
        </button>

        <!-- Nav links -->
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav mx-auto gap-2">
            <li
              class="nav-item"
              v-for="link in navLinks"
              :key="link.label"
            >
              <router-link
                :to="{ name: link.routeName }"
                class="nav-link nav-pill-item"
                active-class="active"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

.header-wrapper {
  background: var(--bg);
  min-height: 180px;
  font-family: 'Barlow', sans-serif;
}

/* NAVBAR */
.cinema-nav {
  background: linear-gradient(
    to bottom,
    rgb(255, 0, 0) 0%,
    transparent 100%
  );
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.cinema-nav.nav-scrolled {
  background: rgba(10, 10, 10, 0.96);
  backdrop-filter: blur(12px);
  padding: 0.7rem 0;
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

/* Nav items */
.nav-pill-item {
  color: var(--muted);
}

.nav-pill-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.06);
}

.nav-pill-item.active {
  color: white;
  background: rgba(229, 9, 20, 0.15);
  border-bottom: 2px solid var(--red);
}

/* Mobile toggler */
.toggler-icon {
  display: block;
  width: 22px;
  height: 2px;
  background: #ccc;
  margin: 5px 0;
  border-radius: 2px;
}
</style>