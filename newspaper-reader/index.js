const api_key = '83c0b3fcb942774c1432ac5351b082fe';
const uri = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + api_key;

$(document).ready(function () {

  $.ajax(uri).done(function (data) {
    let count = 0
    let html = "";
    html += `<div id="myCarousel" class="carousel slide container" data-bs-ride="carousel">
    <div class="carousel-inner w-100">`

    data?.articles?.map((ele, index) => {
      if (ele.image && count < 1) {
        count++;
        console.log("image1", ele)
        html += `<div class="carousel-item active">
            <div class="col-md-3">
              <div class="card card-body">
                <img class="img-fluid image_news" src='${ele.image}' data-list=${index} />
              </div>
            </div>
          </div>`
      } else if (ele.image && count > 0) {
        count++
        console.log("image2", ele.image)
        html += `<div class="carousel-item ">
                <div class="col-md-3">
                  <div class="card card-body">
              
                    <img class="img-fluid image_news" src='${ele.image}' data-list=${index} />
                    
                  </div>
                </div>
              </div>`
      }
    })

    html += `</div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
    if (html.length !== 0) {
      $('#crousal_1').append(html)
    }
    console.log(html)
    $('.carousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (let i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });
    const news_clicked = document.getElementsByClassName("image_news")
    console.log(news_clicked,)
    for (let i = 0; i < news_clicked.length; i++) {
      news_clicked[i].addEventListener("click", function () {

        const news_data = this.getAttribute('data-list')
        console.log(news_data)
        // window.location.href = "./detail.html"
        $.ajax(uri).done(function (data) {
          data.map((ele, idx) => {
            if (idx === news_data) {
              console.log(ele)
            }
          })
        })
      })
    }
  });



});