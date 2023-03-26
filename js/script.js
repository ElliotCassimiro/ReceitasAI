

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js" integrity="sha512-LUKzDoJKOLqnxGWWIBM4lzRBlxcva2ZTztO8bTcWPmDSpkErWx0bSP4pdsjNH8kiHAUPaT06UXcb+vOEZH+HpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

function start() {
  let res_msg = document.createElement('div')
  res_msg.innerHTML = "Olá sou o BotCooker, o que vamos cozinhar?":
  res_msg.setAttribute("class","left");

  document.getElementById('mensagem').appendChild(res_msg);
  

}

  document.getElementById('enviar').addEventListener("click", async (e) =>
  {
      e.preventDefault();

      var req = document.getElementById('text').value ;
      if (req == undefined || req== "") {

      }
      else{
          let res = ";
          
          await axios.get('https://api.api-ninjas.com/v1/recipe?query=').then(data => {
            res = JSON.stringify(data.data.response)
          } )
          
          let msg_req = document.createElement('div');
          let msg_req = document.createElement('div');

          let con1 = document.createElement('div');
          let con2 = document.createElement('div');

          con1.setAttribute("class","msgCon1");
          con2.setAttribute("class","msgCon2");

          msg_req.innerHTML = req ;
          msg_req.innerHTML = res ;

          msg_req.setAttribute("class","right");
          msg_req.setAttribute("class","left");

          let message = document.getElementById('mensagem');

          message.appendChild(Con1);
          message.appendChild(Con2);

          Con1.appendChild(msg_req);
          Con2.appendChild(msg_res);

          document.getElementById('text').value="";


      }


  });
