import { useState } from "react";
import axios from "axios";


export default function SrcPrompt() {
    const [response, setResponse] = useState("");


    const fetchMeme = async () => {
        try {
            const apiResponse = await axios.post('https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: 'user', content: "give a 2-liner joke" }],
                    max_tokens: 50,
                },
                
            );
            setResponse(apiResponse?.data);
        }
        catch (error) {
            console.log(error, "there is some error in API");
        }
    }

    


    return (
        <div className="meme-container">
            <h2>Meme Prompt Generator</h2>
            <p className="meme-prompt">{response || "Click the button for a meme idea!"}</p>
            <button onClick={fetchMeme}>Generate Prompt</button>
        </div>)
}

