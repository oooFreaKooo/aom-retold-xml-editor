<template>
  <header class="custom-header">
    <NuxtImg src="/header.webp" alt="Header Image" class="header-background" format="webp" />
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">XML - Unit Editor</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tools</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Main header styling */
.custom-header {
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(50%);
}

/* Navbar styling */
.navbar {
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.7);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar-brand {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.1);
}

.nav-link {
  color: #fff !important;
  font-size: 1.2rem;
  margin: 0 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f0a500 !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #f0a500;
  left: 0;
  bottom: -5px;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

header {
  margin-bottom: 50px;
}
</style>

<!-- https://websim.ai/c/kBBA5bUSywsVRfRKE -->
