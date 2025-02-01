import { ref, onMounted } from 'vue';

export function useFetchData(apiUrl) {
  const data = ref(null);
  const loading = ref(true);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      data.value = await response.json();
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchData);

  return { data, loading };
}