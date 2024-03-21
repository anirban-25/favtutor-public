const http = require("http");
const { spawn } = require("child_process");

// Function to execute code using Flask app
function executeCode(code) {
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({ code: code });
    const requestOptions = {
      hostname: "localhost",
      port: 5000, // Flask app's port
      path: "/execute",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": requestBody.length,
      },
    };

    const req = http.request(requestOptions, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(data);
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(requestBody);
    req.end();
  });
}
