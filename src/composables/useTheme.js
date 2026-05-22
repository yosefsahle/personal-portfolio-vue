import { ref, watch } from 'vue';

const lighMode = ref(
  localStorage.getItem('theme') === null
    ? true
    : localStorage.getItem('theme') === 'true'
);

// Apply on first load
document.documentElement.classList.toggle('dark', !lighMode.value);

// Watch for changes → persist + apply
watch(lighMode, (val) => {
  localStorage.setItem('theme', val);
  document.documentElement.classList.toggle('dark', !val);
});

const toggleMode = (mode) => {
  lighMode.value = mode;
};

export function useTheme() {
  return {
    lighMode,
    toggleMode
  };
}