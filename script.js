const message = document.getElementById("video-player")
const searchBtn = document.getElementById("search-btn")
const inputField = document.getElementById("search-area")
const input = inputField.value
const videosContainer = document.getElementById("video-player");
const url = "https://api.freeapi.app/api/v1/public/youtube/videos";
// fetch function

async function getData() {

  try {
    const response = await fetch(url);
    const apiData = await response.json();
    // console.log(apiData)

    const allContent =  apiData.data.data;

    

    allContent.forEach((videoData) => {
      const videoContent = videoData.items;
     

      const videoUrl = `https://www.youtube.com/watch?v=${videoContent.id}`;

    
    const videoImgSrc = videoContent.snippet.thumbnails.medium.url
      // video card
      const videoCard = `
        <a href="${videoUrl}" 
          <div class= "video-card">
           <img src=${videoImgSrc} alt="${videoContent.snippet.title}">
           <h3 class="video-title">${videoContent.snippet.title}</h3>
           <div class="channel-info"><p>${videoContent.snippet.channelTitle}</p></div>
           </div>
         </a>
          `;

      videosContainer.innerHTML += videoCard;
    });

   
   
  } catch (error) {
    console.log("error while getting videos");
    message.innerHTML = `<h3>Error while fetching videos</h3>`
  }
}


getData();

