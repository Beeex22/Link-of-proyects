const overlay=document.getElementById('overlay');
const questionBox=document.getElementById('questionBox');
const questionText=document.getElementById('questionText');
const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const heartsContainer=document.getElementById('heartsContainer');
const textsContainer=document.getElementById('textsContainer');

setTimeout(()=>overlay.style.opacity='1',100);

setTimeout(()=>{
 questionBox.classList.add('show');
 startTyping();
},7000);

function startTyping(){

 const text='¿Do you love me?';

 let i=0;

 const t=setInterval(()=>{

   questionText.textContent += text[i];

   i++;

   if(i>=text.length){

      clearInterval(t);

      setTimeout(()=>{
        yesBtn.style.opacity='1';
      },500);

      setTimeout(()=>{
        noBtn.style.opacity='1';
      },1000);

      setTimeout(()=>{
        yesBtn.disabled=false;
        noBtn.disabled=false;
      },1200);

   }

 },150);

}

yesBtn.addEventListener('click',startLove);
noBtn.addEventListener('click',startLove);

let started=false;

function startLove(){

 if(started) return;

 started=true;

 questionBox.remove();

 createHearts();
 createTexts();

}

function heartSVG(){

return `
<svg viewBox="0 0 512 512" width="100%" height="100%">
<path fill="#ff66cc"
d="M256 472
C256 472 40 320 40 168
C40 90 102 40 176 40
C220 40 248 64 256 84
C264 64 292 40 336 40
C410 40 472 90 472 168
C472 320 256 472 256 472Z"/>
</svg>`;

}

function createHearts(){

 setInterval(()=>{

   const heart=document.createElement('div');

   heart.className='heart';

   let size;

   const r=Math.random();

   if(r<0.7){

      size=25+Math.random()*25;

   }else if(r<0.95){

      size=50+Math.random()*30;

   }else{

      size=90+Math.random()*40;

   }

   heart.style.width=size+'px';
   heart.style.height=size+'px';

   heart.style.left=Math.random()*100+'%';

   heart.style.animationDuration=
   (6+Math.random()*6)+'s';

   heart.style.filter=
   'drop-shadow(0 0 15px #ff66cc) drop-shadow(0 0 35px #ff66cc)';

   heart.innerHTML=heartSVG();

   heartsContainer.appendChild(heart);

   setTimeout(()=>{
      heart.remove();
   },15000);

 },333);

}

function createTexts(){

 setInterval(()=>{

   const text=document.createElement('div');

   text.className='loveText';

   text.innerText='I love you';

   text.style.left=
   Math.random()*90+'%';

   text.style.top=
   Math.random()*90+'%';

   text.style.fontSize=
   (25+Math.random()*35)+'px';

   textsContainer.appendChild(text);

   setTimeout(()=>{
      text.remove();
   },5000);

 },999);

}
