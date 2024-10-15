export async function fetchGet(url) {
  try {
      const response = await fetch(url, {
          method: 'GET', // Especifica el método HTTP
          headers: {
              'Content-Type': 'application/json', // Indica que el contenido enviado es JSON
              'Accept': 'application/json' // Indica que se espera una respuesta en JSON
          }
      });

      if (!response.ok) { // Verifica si la respuesta fue exitosa
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); // Convierte la respuesta a JSON
      console.log(data); // Muestra los datos en la consola
      return data; // Devuelve los datos
  } catch (error) {
      console.error('Error fetching data:', error); // Maneja errores
  }
}
