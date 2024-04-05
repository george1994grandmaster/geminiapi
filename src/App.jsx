import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setQuestion("")
    setAnswer("loading..")
    const response = await axios({
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDzRkkJM0cYTdDFntBJF13XlBU4qA1fG0Q',
      method: 'post',
      data: {
        contents: [
          {"parts":[{"text": question}]}
        ]
      }
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }
  
  return (
    <>
      <h1>CHAT AI</h1>
      <textarea 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)} 
        cols="30" 
        rows="10"
      >
      </textarea>
      <button onClick={generateAnswer}>generate answer</button>
      <pre>{answer}</pre>
    </>
  )
}

export default App
