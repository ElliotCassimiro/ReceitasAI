const GERAR_RECEITA_API_URL = 'https://api.apilayer.com/spoonacular/food/products/search?query='
const gerarReceitaElement = document.getElementById('gerarReceita');

function init() {
  let res_msg = document.createElement('div')
  res_msg.innerHTML = "Hello, I am BotCooker! Type in ingredient to get a recipe..." ;
  res_msg.setAttribute("class","left");
  
  

  document.getElementById('mensagem').appendChild(res_msg);
}

  document.getElementById('resposta').addEventListener("click", async (e) => {
  e.preventDefault();


  var myHeaders = new Headers();
myHeaders.append("apikey", "k4iXTGyqZEOeZCTxELt1Mv2827M8R7ED");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function gerarReceita() {
  return fetch(GERAR_RECEITA_API_URL, requestOptions)
  .then(response => response.json())
  .then(data => data.content)
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

async function carregarReceita(msg_enviada) {
  const recipe = await gerarReceita()
  gerarReceitaElement.innerHTML = ''
  
}

      var req = document.getElementById('msg_enviada').value;
      if (req == undefined || req == "") {
      }
      else{
          var res = "";

          await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${req}`).then(data => {
            res = JSON.stringify(data.data.response)
          } )

          let data_req = document.createElement('div');
          let data_res = document.createElement('div');

          let con1 = document.createElement('div');
          let con2 = document.createElement('div');

          con1.setAttribute("class","msgCon1");
          con2.setAttribute("class","msgCon2");

          data_req.innerHTML = req ;
          data_res.innerHTML = res ;

          data_req.setAttribute("class","right");
          data_res.setAttribute("class","left");

          let message = document.getElementById('mensagem');
  
          message.appendChild(con1);
          message.appendChild(con2);

          con1.appendChild(data_req);
          con2.appendChild(data_res);

          document.getElementById('msg_enviada').value ="";    
      }
      
  });