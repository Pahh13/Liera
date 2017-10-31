function rodarDados(){
    
    document.getElementById("resultado").value = "";
    document.getElementById("categoria").value = "default";

        for (i = 1; i < 6; i++) {

          var x = Math.floor((Math.random() * 6) + 1);
          var img = document.getElementById('img'+i);
          img.setAttribute('src', 'img/dice'+x+'.PNG');
          img.setAttribute("val", ''+x+'');

        }
    }

function verificaCategoria(valor){
      
      if(valor > 0 && valor < 7){
        pontuarSomaUnitaria(valor);
      }else if(valor == 20){
        pontuarSeqMaior();
      }else if(valor == 50){
        pontuarAurora();
      }else{
        document.getElementById("resultado").value = 0;
      }

    }

function pontuarSomaUnitaria(valor){

      var multiplicador = 0;

      for (i = 1; i < 6; i++) {
      
      var img = document.getElementById('img'+i).getAttribute('val');

        if(img == valor){
          multiplicador++;
        }

      }

      document.getElementById("resultado").value = multiplicador*valor;
          
    }


function pontuarSeqMaior(){
      
      var img1 = document.getElementById('img1').getAttribute('val');
      var img2 = document.getElementById('img2').getAttribute('val');
      var img3 = document.getElementById('img3').getAttribute('val');
      var img4 = document.getElementById('img4').getAttribute('val');
      var img5 = document.getElementById('img5').getAttribute('val');

      if(img1 < img2 && img2 < img3 && img3 < img4 && img4 < img5){
        document.getElementById("resultado").value = 20;
      }else{
        document.getElementById("resultado").value = 0;
      }

    }

function pontuarAurora(){
      
      var img1 = document.getElementById('img1').getAttribute('val');
      var img2 = document.getElementById('img2').getAttribute('val');
      var img3 = document.getElementById('img3').getAttribute('val');
      var img4 = document.getElementById('img4').getAttribute('val');
      var img5 = document.getElementById('img5').getAttribute('val');

      if(img1 == img2 && img1 == img3 && img1 == img4 && img1 == img5){
        document.getElementById("resultado").value = 50;
      }else{
        document.getElementById("resultado").value = 0;
      }

    }