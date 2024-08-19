
//Fonction asynchrone pour récupérer des données depuis une URL.
const fetchData = async (url) => {
    try {
       // envoyer une requête HTTP et attend la réponse par fetch.
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
       
    }
}
// Fonction fléchée asynchrone pour effectuer des appels API parallèles
const parallelCalls = async (urls) => {
    try {
        // Mapper les URL en promesses fetch
        const fetchPromises = urls.map(url => fetchData(url));

        // Attendre que toutes les promesses se résolvent
        const responses = await Promise.all(fetchPromises);

        // Convertir les objets Response en JSON et afficher les résultats
        const resultsPromises = responses.map(response => response.json());
        const results = await Promise.all(resultsPromises);

        // Afficher les résultats
        results.forEach((result, index) => {
            console.log(`Response from URL ${urls[index]}:`, result);
        });
    } catch (error) {
        // Afficher un message d'erreur en cas de problème
        console.error('Error in parallel requests:', error);
    }
};




