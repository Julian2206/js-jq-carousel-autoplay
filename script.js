const myImageList = [
  "https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg",
  "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg",
  "https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
  "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
  "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",
  "https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg",
];

// get the empty img by Id "";
let slide = document.getElementById("slide");

// get button element Id and assign to a const;
const previousBtn = document.getElementById("previous-button");
const nextBtn = document.getElementById("next-button");

// set current index to 0;
let index = 0;

// remove slide["src"]
slide["src"] = myImageList[index];

{
  for (let index = 0; index <= myImageList.length; index++) {
    /* let index = 1; */
    nextBtn.addEventListener("click", function () {
      // add one
      index++;

      if (index > myImageList.length - 1) {
        index = 0;
      }

      slide.src = myImageList[index];
    });

    previousBtn.addEventListener(
      "click",
      function () {
        // minus 1
        index--;

        if (index < 0) {
          index = myImageList.length - 1;
        }
        slide.src = myImageList[index];
      },
      2000
    );
  }
}

const clock = setInterval(function () {
  nextBtn.click();
}, 1000);

document
  .getElementById("previous-button")
  .addEventListener("click", function () {
    clearInterval(clock);
  });

//---------------------------------------------------------
