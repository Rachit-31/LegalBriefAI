import styles from './AiPage.module.css';
import { UserContext } from '../../../context/UserContextProvider';
import {useContext , useState} from 'react';
// import fetch from "node-fetch";



async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/madushakv/t5_xsum_samsum_billsum_cnn_dailymail",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
        // Handle non-200 status codes, including 503 (Service Unavailable)
        if (response.status === 503) {
          throw new Error("Hugging Face API is currently unavailable. Please try again later.");
        } else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }
    const result = await response.json();
    return result;
  }
const AiPage=()=>{

    const {user}=useContext(UserContext);


    const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const queryAPI = async () => {
    setIsLoading(true);
    setError(null); // Clear any previous error

    try {
      const response = await query({ inputs: inputText });
      setOutput(response.outputs);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred during summarization. Please try again later."); // Informative error message
    } finally {
      setIsLoading(false);
    }
  };
    return(
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}

            <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here"
      />
      <br />
      <button onClick={queryAPI} disabled={isLoading}>
        {isLoading ? 'Summarizing...' : 'Summarize'}
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {output && (
        <div>
          <h3>Summary:</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
        </div>
    )
}
export default AiPage;