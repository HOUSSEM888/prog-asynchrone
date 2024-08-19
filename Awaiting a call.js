// Function to simulate an API call 
//)

const simulateApiCall=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve('Simulated API RESPONSE DATA');

    }, 2000);
})

// Async function to await the simulated API call
const awaitCall=async()=>{

   try {
        // Await the simulated API call
        const data = await simulateApiCall();
        // Log the response data
        console.log('API Response:', data);
    } catch (error) {
        // Handle any errors that occur
        console.error('Error fetching data:', error);
    }
}

// Call the async function
awaitCall();