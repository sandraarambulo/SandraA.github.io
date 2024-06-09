const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
const btnDislike1 = document.getElementById("btnDislike1")
const countDislike1 = document.getElementById("countDislike1")
const btnDislike2 = document.getElementById("btnDislike2")
const countDislike2 = document.getElementById("countDislike2")
const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function clickLike1(){
    let totalLikes1 = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()
  }
function clickDislike1(){
  let totalDislikes1 = parseInt(countDislikes1.value) + 1
  countDislikes1.textContent = totalDislikes1.toString()
}
function clickLike2(){
    let totalLikes2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLikes2.toString()
}
function clickDislike2(){
  let totalDislikes2 = parseInt(countDislikes2.value) + 1
  countDislikes2.textContent = totalDislikes2.toString()
}
function clickheart1(){
    let totalLikes1 = parseInt(countheart1.value) + 1
    countheart1.textContent = totalLikes1.toString()
  }
function clickheart2(){
    let totalLikes1 = parseInt(countheart2.value) + 1
    countheart2.textContent = totalLikes1.toString()
  }
function clickwow1(){
    let totalLikes1 = parseInt(countwow1.value) + 1
    countwow1.textContent = totalLikes1.toString()
  }
function clickwow2(){
    let totalLikes1 = parseInt(countwow2.value) + 1
    countwow2.textContent = totalLikes1.toString()
  }
function submitComment(){
commentbox.textContent += comment.value.toString() + "\n"
comment.value="";
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnDislike1.addEventListener("click",clickDislike1)
btnDislike2.addEventListener("click",clickDislike2)
btnheart1.addEventListener("click",clickheart1)
btnheart2.addEventListener("click",clickheart2)
btnwow1.addEventListener("click",clickwow1)
btnwow2.addEventListener("click",clickwow2)
submit.addEventListener("click",submitComment)
