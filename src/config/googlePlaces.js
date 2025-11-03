// Configuração da Google Places API
// Para usar reviews do Google, você precisa:
// 1. Criar uma conta no Google Cloud Platform
// 2. Habilitar a API "Places API (New)"
// 3. Obter uma chave de API
// 4. Obter o Place ID do seu estabelecimento no Google My Business

export const GOOGLE_PLACES_CONFIG = {
  // Cole sua chave de API do Google aqui
  API_KEY: import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '',
  
  // Cole o Place ID do seu estabelecimento aqui
  // Você pode encontrar no Google My Business ou usando: https://developers.google.com/maps/documentation/places/web-service/place-id
  PLACE_ID: import.meta.env.VITE_GOOGLE_PLACE_ID || '',
  
  // Nome do estabelecimento (usado como fallback)
  PLACE_NAME: 'Agoma - Street Food Cambuci',
};

// Função para verificar se a configuração está completa
export const isConfigured = () => {
  return GOOGLE_PLACES_CONFIG.API_KEY && GOOGLE_PLACES_CONFIG.PLACE_ID;
};

