<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    button{
        padding: 5px;
        border-radius: 100px;
    }
    button:hover{
        background-color: lightpink;
        border: 3px solid white;
    }
  </style>

  <body>
    <main style="display: flex ; gap: 5px;">
      <div
        id="hey"
        style="display: flex; flex-direction: column; gap: 5px;"
      ></div>
      <div  style="  width: 600px; padding: 10px; font-weight: bolder;" id="content">
        
      </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
      axios
        .get("https://api.alquran.cloud/v1/quran/en.asad")
        .then((response) => {
          console.log(response.data.data.surahs);
          let surahs = response.data.data.surahs;

          surahs.map((surah) => {
            const button = document.createElement("button");

            button.textContent = surah.name;
            button.addEventListener("click", () => getUsers(surah.number)); 
            document.getElementById("hey").appendChild(button); 
          });
        })
        .catch((error) => {
          console.log("Error:", error);
        });

    
      function getUsers(surahId) {
        document.getElementById('content').innerHTML=''
        axios.get(`https://api.alquran.cloud/v1/surah/${surahId}`)
        .then((resposne)=>{
            let surah= resposne.data.data;
            console.log(surah.ayahs
            )
            let ayat=surah.ayahs
            ayat.map((aya)=>{
              let aya2=document.createElement('p')
              aya2.textContent=aya.text
              document.getElementById('content').appendChild(aya2)
            })
            

        })
      }

    
    </script>
  </body>
</html>
