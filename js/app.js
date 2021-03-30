'use strict';
let form =document.getElementById('articleForm');
form.addEventListener('submit',postArticle);
let author=document.getElementById('author');
let articleTitle=document.getElementById('title');
function postArticle(event){
  localStorage.setItem('author',JSON.stringify(author.value));
  localStorage.setItem('articleTitle',JSON.stringify(articleTitle.value));
}