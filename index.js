// TASK 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function myFunc() {
    var Header = document.getElementById("head");
    var Body = document.getElementById("content");
    var Arrow = document.getElementById("arrow");

    var h = Header.classList;
    var bo = Body.classList;
    var ar = Arrow.classList;

    h.toggle("header");
    bo.toggle("body");
    ar.toggle("arrow");


    var a = h.contains("header");
    var b = bo.contains("body");

    if (a && b) {
        h.remove("journey__board__header");
        bo.remove("journey__board__content");
        ar.remove("open__arrow");
        Arrow.innerHTML = '<i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i>';
        Body.innerHTML = '<ul><li><strong>Explore the world of management</strong></li><br><li>Technical Project Management</li><li>Threadbuild</li><li>Structure your Pointers</li><li>4SA Method</li></ul>'

    } else if (!a && !b) {
        h.add("journey__board__header");
        bo.add("journey__board__content");
        ar.add("open__arrow");
        Arrow.innerHTML = '<i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>';
        Body.innerHTML = '<div class = "uno"><a class = "one">1</a></div>'
    }    
}

// TASK 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const headings = document.getElementsByClassName("sheep");
const descriptions = document.getElementsByClassName("desc");
const contents = document.getElementsByClassName("conc")


fetch("deepthought.json")
.then((response) => {
if (!response.ok) {
  throw new Error(`HTTP error, status = ${response.status}`);
}
return response.json();
})
.then((data) => {
var i = 0;
for (var asset of data.assets) {
  // heading 
  headings[i].textContent = asset.asset_title;
  
  // description
  descriptions[i].innerHTML = `<strong>Description: </strong>${asset.asset_description}`;

  // content
  var element = contents[i].getElementsByTagName("iframe")[0];
  if (element){
    x.setAttribute("src", `${asset.asset_content}`)
  }

  i++;
  
}
});