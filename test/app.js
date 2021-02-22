function rftBtn(){
  getData('rft');
}

function qnaBtn(){
  getData('qna');
}

function othersBtn(){
  getData('others');
}


function getData(input){
  fetch('https://techiciousytapi.herokuapp.com/'+ input)
  .then(res => res.json())
  .then(data => {
    let out="";

    let id = Math.random();

    data.forEach(user => {
      out += `
      <div class="video-card">
      <a class="thumbnail" href="#${id}">
    <img src="${user.Main.ThumbNailDetails.thumbnailUrl}">
    
      <h4>${user.Main.title}</h4>

      </a>
      <div id="${id}">
      <iframe width="600" height="340" src="https://www.youtube.com/embed?listType=user_uploads&list=michaelpedrin" frameborder="0" allowfullscreen style="width: 90%; height: 90%; margin-top: 130px;margin-left: 70px;margin-bottom: 50px;"></iframe>
      </div>
  </div>
      `
    });
    document.querySelector('#results').innerHTML = out;
  })
}


