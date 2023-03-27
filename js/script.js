
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
          
          let msg_req = document.createElement('div');
          let msg_res = document.createElement('div');

          let con1 = document.createElement('div');
          let con2 = document.createElement('div');

          con1.setAttribute("class","msgCon1");
          con2.setAttribute("class","msgCon2");

          msg_req.innerHTML = req ;
          msg_res.innerHTML = res ;

          msg_req.setAttribute("class","right");
          msg_res.setAttribute("class","left");

          let message = document.getElementById('mensagem');

          message.appendChild(Con1);
          message.appendChild(Con2);

          Con1.appendChild(msg_req);
          Con2.appendChild(msg_res);

          document.getElementById('msg_enviada').value ="";


      }


  });
