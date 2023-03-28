
function init() {
  let res_msg = document.createElement('div')
  res_msg.innerHTML = "Olá sou o BotCooker, o que vamos cozinhar?" ;
  res_msg.setAttribute("class","left");

  document.getElementById('mensagem').appendChild(res_msg);
}

  document.getElementById('resposta').addEventListener("click", async (e) => {
  e.preventDefault();

      var req = document.getElementById('enviar_msg').value ;
      if (req == undefined || req == "") {

      }
      else{
          var res = "";
          
          await axios.get(`https://api.api-ninjas.com/v1/recipe?query=`).then(data => {
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

          message.appendChild(Con1);
          message.appendChild(Con2);

          Con1.appendChild(data_req);
          Con2.appendChild(data_res);

          document.getElementById('msg_enviada').value ="";
      
          function scroll() {
            var scrollMsg = document.getElementById('mensagem')
            scrollMsg.scrollTop = scrollMsg.scrollHeight ;
        }
        scroll();
     
      }




  });
