var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[2].style.backgroundColor='yellow';



for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
