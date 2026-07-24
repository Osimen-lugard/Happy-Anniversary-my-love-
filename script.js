*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:linear-gradient(135deg,#090909,#1b0b18,#2d1027);
color:white;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.stars{
position:fixed;
width:100%;
height:100%;
background-image:
radial-gradient(white 1px,transparent 1px),
radial-gradient(#ffd700 1px,transparent 1px);
background-size:80px 80px,140px 140px;
animation:moveStars 50s linear infinite;
opacity:.4;
}

@keyframes moveStars{
from{
transform:translateY(0);
}
to{
transform:translateY(-500px);
}
}

.container{
width:92%;
max-width:760px;
position:relative;
z-index:5;
}

.card{
background:rgba(255,255,255,.08);
backdrop-filter:blur(15px);
padding:40px;
border-radius:25px;
box-shadow:
0 0 30px rgba(255,215,0,.15),
0 0 60px rgba(255,0,90,.15);
text-align:center;
animation:fade 1.2s;
}

.hidden{
display:none;
}

h1{
font-family:'Cinzel',serif;
font-size:40px;
color:#ffd700;
margin-bottom:10px;
}

h2{
font-size:20px;
font-weight:300;
margin-bottom:20px;
}

p{
font-size:18px;
line-height:1.8;
margin-bottom:20px;
}

button{
padding:15px 35px;
border:none;
border-radius:50px;
background:linear-gradient(45deg,#ff4d88,#ff0055);
color:white;
font-size:18px;
cursor:pointer;
transition:.4s;
}

button:hover{
transform:scale(1.08);
box-shadow:0 0 20px #ff4d88;
}

input{
width:100%;
padding:15px;
margin:25px 0;
border:none;
border-radius:12px;
font-size:18px;
text-align:center;
outline:none;
}

#typing{
text-align:left;
line-height:2;
font-size:18px;
white-space:pre-wrap;
height:65vh;
overflow-y:auto;
padding-right:10px;
}

#typing::-webkit-scrollbar{
width:6px;
}

#typing::-webkit-scrollbar-thumb{
background:#ff4d88;
border-radius:10px;
}

.heart{
position:fixed;
bottom:-50px;
font-size:24px;
animation:float 8s linear infinite;
pointer-events:none;
}

@keyframes float{
0%{
transform:translateY(0) rotate(0deg);
opacity:0;
}

15%{
opacity:1;
}

100%{
transform:translateY(-120vh) rotate(360deg);
opacity:0;
}
}

@keyframes fade{
from{
opacity:0;
transform:translateY(20px);
}
to{
opacity:1;
transform:translateY(0);
}
}

@media(max-width:600px){

.card{
padding:25px;
}

h1{
font-size:30px;
}

h2{
font-size:18px;
}

p{
font-size:16px;
}

button{
width:100%;
}

}
