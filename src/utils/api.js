import axios from "axios";

export async function testApiEndpoint() {
  try {
    const response = await axios.get(
      "https://36690484.compilers.sphere-engine.com/api/v4/test?access_token=fef84a340cad31775ffca8e96e338e2d"
    );

    if (response.status !== 200) {
      throw new Error("API request failed");
    }

    const data = response.data.message;
    return data;
  } catch (error) {
    console.error("Error testing API endpoint:", error);
    throw error;
  }
}
