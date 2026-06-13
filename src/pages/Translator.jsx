import { useState } from "react";
import axios from "axios";
function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("ta");
  const [translatedText, setTranslatedText] = useState("");
  const translateText = async () => {
  try {
    setTranslatedText("Translating...");

    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/json",
      headers: {
        "x-rapidapi-key": "f05109d0d7mshd6bf7499b6cc4efp19b551jsnd54bd4e1fd02",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        from: "auto",
        to: language,
        json: {
          text: text,
        },
      },
    };

    const response = await axios.request(options);

    setTranslatedText(response.data.trans.text);
  } catch (error) {
    console.log(error);
    setTranslatedText("Translation Failed");
  }
};
  return (
  <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center p-6">
  <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl">
    <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
      AI Text Translator
    </h1>

    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="border-2 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows="6"
      placeholder="Enter text to translate..."
    />

    <div className="flex gap-4 mt-4">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border-2 p-3 rounded-lg"
      >
        <option value="ta">Tamil</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>

      <button
        onClick={translateText}
        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Translate
      </button>
    </div>

    {translatedText && (
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg mb-2">
          Translated Text
        </h2>
        <p>{translatedText}</p>
      </div>
    )}
  </div>
</div>
  );
}
export default Translator;