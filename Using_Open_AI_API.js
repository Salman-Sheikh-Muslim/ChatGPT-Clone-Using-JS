const API_KEY = "Enter Your API Key Here"

async function FetchData() {

   const response = await fetch("https://api.openai.com/v1/chat/completions" ,
   {
    method: "POST",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: 'user',
            content: `hello, how are you today?`
            }],
      //  prompt: "hello, how are you today?",
        max_tokens : 7
    }
    )
   })

   const data= await response.json()
   console.log(data)
}

FetchData()