const data = "../data.json";


/**
 * Handles fetch errors by checking the response status.
 * If the response is not OK, it throws an error with the status and response text.
 * 
 * @async
 * @param {Response} response - The fetch response object.
 * @returns {Promise<Response>} - Returns the response if it is OK.
 * @throws {Error} - Throws an error if the response status is not OK.
 */

const HandleErrors = async (response) => {
  // Check if the response is OK (200-299)
  if (!response.ok) {
    const errorText = await response.text(); // get the response text
    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`); // throw an error with the status and response text
  }
  return response; // return the response if it is OK
}


/**
 * fetches merch infomaion about a specific merch 
 * 
 * @async
 * */ 
export const fetchData = async () => {
  // Fetch the JSON file
  try {
    const response = await fetch(data); // fetch the JSON file
    await HandleErrors(response); // handle any errors in the response
    return response.json(); // Parse the JSON response
  } catch (error) {
    console.error("Error fetching merch:", error.message); // log error message
    throw error; // rethrow the error
  }
}