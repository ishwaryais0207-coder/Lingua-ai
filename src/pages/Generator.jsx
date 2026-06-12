import { useState, useCallback, useEffect } from "react";

function Generator() {
  const [randomText, setRandomText] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < 8; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRandomText(result);
  }, []);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Smart String Generator
        </h1>

        <p className="text-gray-600 mb-6">
          Generate secure and random strings instantly.
        </p>

        <button
          onClick={generateString}
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Generate String
        </button>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-lg mb-2">
            Generated String
          </h2>

          <p className="text-xl font-mono break-all">
            {randomText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Generator;