
// export const getAIMessage = async (userQuery) => {
//
//   const message =
//     {
//       role: "assistant",
//       content: "Connect your backend here...."
//     }
//
//   return message;
// };

// export const getAIMessage = async (userQuery) => {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/chatbot', {
//       method: 'POST',
//       headers: {
//         // 'Content-Type': 'text/plain'  // or 'application/json' if sending JSON
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ message: userQuery })  // if sending JSON
//     });
//     return await response.json();
//   } catch (error) {
//     console.error("Failed to fetch from the Flask API:", error);
//     return { role: "assistant", content: "Failed to connect to the backend." };
//   }
// };


export const getAIMessage = async (userQuery) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Ensure this is set correctly
      },
      body: JSON.stringify({ message: userQuery })  // Make sure you're sending a JSON object
    });
    const data = await response.json();  // Parse the JSON response
    console.log(data);  // Log to see what you received
    return {role: "assistant", content: data.response};
  } catch (error) {
    console.error("Failed to fetch from the Flask API:", error);
    return { role: "assistant", content: "Failed to connect to the backend." };
  }
};



// export const getAIMessage = async (userQuery) => {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/chatbot', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'text/plain'
//       },
//       body: userQuery  // Sending the user query as plain text
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const message = await response.json();
//     return message;
//   } catch (error) {
//     console.error("Failed to fetch from the Flask API:", error);
//     return { role: "assistant", content: "Failed to connect to the backend." };
//   }
// };


// export const getAIMessage = async (userQuery) => {
//   try {
//     const response = await fetch('http://127.0.0.1:5000/chatbot', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'text/plain'
//       },
//       body: userQuery  // Sending the user query as plain text
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return await response.json();  // ensure you are parsing the JSON response
//   } catch (error) {
//     console.error("Failed to fetch from the Flask API:", error);
//     return { role: "assistant", content: "Failed to connect to the backend." };
//   }
// };
