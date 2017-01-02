var wr={
bd  	:'<a class="fruit" href="#bird" >     </a>',
bd1 	:'<a class="fruit" href="#bird1">     </a>',
bd2 	:'<a class="fruit" href="#bird2">     </a>',
bd3 	:'<a class="fruit" href="#bird3">     </a>',
bd4 	:'<a class="fruit" href="#bird4">     </a>',
bd5 	:'<a class="fruit" href="#bird5">     </a>',
bd6 	:'<a class="fruit" href="#bird6">     </a>',
bd7 	:'<a class="fruit" href="#bird7">     </a>',
bd8 	:'<a class="fruit" href="#bird8">     </a>',
bd9 	:'<a class="fruit" href="#bird9">     </a>',
bd10	:'<a class="fruit" href="#bird10">    </a>',
bd11 	:'<a class="fruit" href="#bird11">    </a>',
bd12 	:'<a class="fruit" href="#bird12">    </a>',
bd13 	:'<a class="fruit" href="#bird13">    </a>',
bd14 	:'<a class="fruit" href="#bird14">    </a>',
bd15 	:'<a class="fruit" href="#bird15">    </a>',
bd16 	:'<a class="fruit" href="#bird16">    </a>',
bd17 	:'<a class="fruit" href="#bird17">    </a>',
bd18 	:'<a class="fruit" href="#bird18">    </a>',
bd19 	:'<a class="fruit" href="#bird19">    </a>',
bd20	:'<a class="fruit" href="#bird20">    </a>',
bd21 	:'<a class="fruit" href="#bird21">    </a>',
bd22 	:'<a class="fruit" href="#bird22">    </a>',
bd23 	:'<a class="fruit" href="#bird23">    </a>',
bd24 	:'<a class="fruit" href="#bird24">    </a>',
bd25 	:'<a class="fruit" href="#bird25">    </a>',
bd26 	:'<a class="fruit" href="#bird26">    </a>',
bd27 	:'<a class="fruit" href="#bird27">    </a>',
bd28 	:'<a class="fruit" href="#bird28">    </a>',
bd29 	:'<a class="fruit" href="#bird29">    </a>',  
bd30	:'<a class="fruit" href="#bird30">    </a>', 
}  
  

// search 
var srh={
// model  
acd:   '<div class="accordion indice font" id="return">search</div>',
lm:    '<div class="panel limon">',  
tb:    '<table style="width:100%">', 
// begin -end  
app:   '<td><p class="apple">',
endapp:'</p></td> ',  
// add-table  
tr:    '</tr><tr>',
// end-wor  
endtb: '</table></div>', 
// modific-word
clp:   '<td colspan="2">',  
}
// model - search
var nv=  srh.acd+srh.lm+srh.tb;
// model - begin - end
var pp=  srh.app;
var ff=  srh.endapp ;
// add - colapse md
var cpn= srh.clp  ;
// end - tr
var trr= srh.tr;

document.getElementById('search')
.innerHTML=nv /*begin*/+pp+wr.bd+ff +pp+wr.bd1+ff +pp+wr.bd2+ff+/*end*/trr/*begin*/+pp+wr.bd3+ff +pp+wr.bd4+ff +pp+wr.bd5+ff+/*end*/trr/*begin*/+pp+wr.bd6+ff +pp+wr.bd7+ff +pp+wr.bd8+ff+/*end*/trr/*begin*/+pp+wr.bd9+ff +pp+wr.bd10+ff +pp+wr.bd11+ff+/*end*/trr/*begin*/+pp+wr.bd12+ff +pp+wr.bd13+ff +pp+wr.bd14+ff+/*end*/trr/*begin*/+pp+wr.bd15+ff +pp+wr.bd16+ff +pp+wr.bd17+ff+/*end*/trr/*begin*/+pp+wr.bd18+ff +pp+ff +pp+wr.bd19+ff+/*end*/    srh.endtb  ;


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

<hr>
<div id="search"></div>
<hr>























body {
  background: #222;
  max-width:1100px;
  margin:auto;
  
}

/* head welcome - blue */
#cont {
  width: 100%;
  height: 50px;
  text-align: center;
  margin: 4px;
  padding: 2px;
  background: linear-gradient(to top right, #3f51b5 0%, #039be5 40%);
  box-shadow: 1px 1px 30px #0277bd;
  

 
}
/* head welcome container */
#head {
  position: relative;
  top: -15px;
  text-transform: capitalize;
  max-width: 900px;
  margin: auto;
  color: white;
  width: 950px;
  background-color: rgba(31, 31, 31, 0.6);
  border-left: 1px solid #e2695f;
  border-radius: 3px;
}
/* Background colours */
div + div article:nth-child(1) {
  background:rgba(67,68,81,0.88);
  border: 6px solid rgba(51,51,51,0.5) ;
  transition: all .8s ease 0s;
}
div + div article:nth-child(2) {
  background:rgba(105,105,105,0.8);
  border: 6px solid #333 ;
  transition: all 0.8s ease 0s;
}
/* Main layout */
div + div {
  width: 1200px;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  overflow: hidden;
}
/* Articles */
div + div article {
  flex: initial;
  width: 5%;
  height: 100%;
  text-align: left;
  color: white;
  box-sizing: border-box;
  padding: 2vh 1vw;
  position: relative;
  vertical-align: bottom;
  opacity: 1;
}
/* hover article */
div > article:hover {
  overflow: auto;
}
/* Hover interaction small */
div + div:hover article {
  flex: initial;
  width: 6%;
  cursor: grad;
}
/* article interaction expand text */
div + div article:hover {
  width: 90%;
}
/* hidden text */
article > div {
  opacity: 0;
  transition: opacity .6s ease 0;
}
/* show text */
div + div article:hover > div {
  opacity: 1;
  transition: opacity .3s ease .3s;
}
/* word vertical  */
div + div article > h2 {
  bottom: 5vh;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: -4px;
  font-size: 3vh;
  transform: rotate(-90deg);
  transform-origin: 0 0 0;
  opacity: 1;
  min-width: 12em;
}
/* rotate word vertical  */
article:hover > h2 {
  top: 2vh;
  transition: opacity .3s ease .3s;
}
@media (max-width: 900px) {
  div + div article {
    padding: 2vh 3vw;
  }
  div + div article > h2:hover {
    transform: rotate(-10deg);
  }
  article div {
    max-height: calc(92%);
    overflow-y: auto;
  }
}
#very {  
  /*background: #696969;*/
  background:rgba(225,255,225,0.3);
  border: 3px solid rgba(225,255,225,0.3);

  border-radius: 5px;
  overflow: auto;
  padding: 25px;
}
#gray {
 background: rgba(67, 68, 81, 0.7);
 border:3px solid rgba(67, 68, 81, 0.7); 
 color:rgba(251, 256, 256, 1);
  overflow: auto;
  border-radius: 5px;
  padding: 20px;
}
#rot {  
 background-color:rgba(161, 192, 87, 0.6);
 background: url('http://1.bp.blogspot.com/-cHkoJ-6op84/UKWPmONRL2I/AAAAAAABQcs/iyowx8VPVaQ/s1600/bosques-y-arboles-en-oto%25C3%25B1o-autumn-forest-trees-6.jpg');
  background-size:100% 100%;
  border-left: 1px solid  #e2695f;
  border-radius: 3px;
  border: 13px solid #000;
  max-width:1085px;
  
}
/*--------------------------------*/
/* print - code*/
#now{
  background:rgba(2,2,2,0.6);
  padding:20px 15px;
  border-radius: 6px;
  color:rgba(261, 296, 96, 1);
}

/* return - seach */
.dec{ text-decoration:none;  color:white;}

/* imagen - seach */
.limon{
  background-color:rgba(161, 192, 87, 0.6);
  background:url('http://imagenesdepaisajes.net/wp-content/uploads/2016/07/bosques-hermosos-1.jpg');
  background-repeat:no-repeat;
  background-size:100% 100%;
  padding:45px;
  max-width:1006px;
  opacity:1;
}
/* text-seach */
.apple{
  padding:6px 9px; 
  font-size: 18px;
  font-family: verdana;
  text-transform: capitalize;
  text-align:center;
}

.fruit{
    text-decoration:none;
    background:rgba(51,51,51,0.8);
    padding:19px 6px;
    color:white; 
    border-radius:4px;  
}

.fruit:hover{  background:rgba(51,51,51,1); }



/* principal -seach */
.font{
  color:white;
  font-size: 38px;  
  text-align: center;
  font-family: arial;    
  text-transform: capitalize;
  
}
/* desplega -seach */
.accordion {
  padding:17px;
  width: 100%;            
  cursor: pointer;
  box-sizing: border-box;  
  border: 3px solid rgba(89,10,12,0.99);
}
.indice{ background:rgba(89,9,9,0.8); }
.indice:hover{ background:rgba(89,9,9,1); }
/* container -seach */
.panel {    display: none;}
.panel.show {  
  display: block;
  border:2px solid white;
  height:300px;
  overflow:auto;
 
}
/* key-word-seach */
td{
  padding:9px 1px;
  border: 3px solid rgba(255,255,255,0.2); ;
  background:rgba(255,255,255,0.3);

  border-radius:5px;

}






