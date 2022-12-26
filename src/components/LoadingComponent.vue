<!-- LoadingComponent.vue -->
<template>
  <div class="loading-container">
    <div class="loading-spinner"></div>
    <p class="loading-message">Loading...</p>
  </div>
</template>

<style>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-spinner {
  width: 48px;
  height: 48px;
  border: 8px solid #ccc;
  border-radius: 50%;
  border-top-color: #333;
  animation: spin 1s linear infinite;
}
.loading-message {
  margin-left: 16px;
  font-size: 24px;
  font-weight: bold;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "LoadingComponent",
};
</script>
