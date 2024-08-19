function simulateApiCall2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 2');
        }, 2000); //2sec delay
    });
}
// Async function concurrent requests
 concurrentRequests:async(req,res)=>{
    try {
        // Execute  API calls concurrently
        const [result1, result2] = await Promise.all([
            simulateApiCall1(),
            simulateApiCall2()
        ]);
        
        // Log results when both promises have resolved
        console.log('Result from API 1:', result1);
        console.log('Result from API 2:', result2);
    } catch (error) {
        //  errors that might occured
        console.error('Error during API requests:', error);
    }
}