function converstionCelcius(){
     let x = document.forms["input"]["celcius"].value;
     if(x == "") {
          alert("Celcius tidak boleh kosong");
          return false;
     }

     var celcius = document.getElementById("cel").value;
     var hasil = parseInt(celcius) * (9/5) + 32;
     var teks = document.getElementById("fah");
     teks.value = hasil;

     var tulis = document.getElementById("kal");
     tulis.value = celcius + "°C * (9/5) + 32 = " + hasil + "°F";
}


function converstionFahrenheit(){
     let x = document.forms["input"]["fahrenheit"].value;
     if(x == "") {
          alert("fahrenheit tidak boleh kosong");
          return false;
     }

     var fahrenheit = document.getElementById("fah").value;
     var hasil = (parseInt(fahrenheit) - 32) * 5/9 ;
     var teks = document.getElementById("cel");
     teks.value = hasil;

     var tulis = document.getElementById("kal");
     tulis.value = "(" + fahrenheit + "°F - 32) x 5/9 = " + hasil + "°C";
}