// src/main.ts
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')!
});

export default app;

// src/app.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-100 min-h-screen;
}