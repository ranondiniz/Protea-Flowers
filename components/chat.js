    $(".chat_icon").click(function(){
        $(".chat_icon img").fadeOut();
        $('.box-questions').css("display", "flex"); 
    });

    $("#fechar_chat").click(function(){
        $(".chat_icon img").fadeIn();
        $('.box-questions').css("display", "none"); 
    });





// Chave de API do OpenAI
const apiKey = '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'

function sendMessage(){
    var message = document.getElementById('message-input')
    if(!message.value)
    {
        message.style.border = '1px solid red'
        return;
    }
    message.style.border = 'none'

    var status = document.getElementById('status')
    var btnSubmit = document.getElementById('btn-submit')

    status.style.display = 'block'
    status.innerHTML = 'Carregando...'
    btnSubmit.disabled = true
    btnSubmit.style.cursor = 'not-allowed'
    message.disabled = true

    fetch("https://api.openai.com/v1/completions",{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message.value,
            max_tokens: 2048, // tamanho da resposta
            temperature: 0.5 // criatividade na resposta
        })
    })
    .then((response) => response.json())
    .then((response) => {
        let r = response.choices[0]['text']
        status.style.display = 'none'
        showHistory(message.value,r)
    })
    .catch((e) => {
        console.log(`Error -> ${e}`)
        status.innerHTML = 'Erro, tente novamente mais tarde...'
    })
    .finally(() => {
        btnSubmit.disabled = false
        btnSubmit.style.cursor = 'pointer'
        message.disabled = false
        message.value = ''
    })
}

function showHistory(message,response){
    var historyBox = document.getElementById('history')

    // My message
    var boxMyMessage = document.createElement('div')
    boxMyMessage.className = 'box-my-message'

    var myMessage = document.createElement('p')
    myMessage.className = 'my-message'
    myMessage.innerHTML = message

    boxMyMessage.appendChild(myMessage)

    historyBox.appendChild(boxMyMessage)

    // Response message
    var boxResponseMessage = document.createElement('div')
    boxResponseMessage.className = 'box-response-message'

    var chatResponse = document.createElement('p')
    chatResponse.className = 'response-message'
    chatResponse.innerHTML = response

    boxResponseMessage.appendChild(chatResponse)

    historyBox.appendChild(boxResponseMessage)

    // Levar scroll para o final
    historyBox.scrollTop = historyBox.scrollHeight
}