(this.webpackJsonpbattle=this.webpackJsonpbattle||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/monster.ca114c67.png"},12:function(n,e,t){n.exports=t.p+"static/media/player.38993b84.png"},17:function(n,e,t){n.exports=t(25)},24:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(10),i=t.n(c),o=t(4),l=t(11),u=t.n(l),s=t(12),f=t.n(s),m=t(16),b=t(1),d=t(2);function p(){var n=Object(b.a)(["\n  flex: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return p=function(){return n},n}function v(){var n=Object(b.a)(['\n  flex: 0;\n  font-family: "Grenze Gotisch", cursive;\n  font-size: 24px;\n  font-weight: bold;\n  margin: 0;\n']);return v=function(){return n},n}function h(){var n=Object(b.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n"]);return h=function(){return n},n}function g(){var n=Object(b.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  cursor: pointer;\n  background: none;\n  border: 1px solid grey;\n  border-radius: 2px;\n  font-size: 18px;\n']);return g=function(){return n},n}function E(){var n=Object(b.a)(["\n        animation-duration: 0.5s;\n        animation-fill-mode: both;\n        backface-visibility: visible;\n        animation-timing-function: ease;\n        animation-name: ",";\n      "]);return E=function(){return n},n}function x(){var n=Object(b.a)(["\n  width: 100px;\n  height: 100px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  transform-origin: center;\n\n  span {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n  ","\n"]);return x=function(){return n},n}function j(){var n=Object(b.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  font-size: 16px;\n  font-weight: bold;\n']);return j=function(){return n},n}function O(){var n=Object(b.a)(['\n  width: 30px;\n  height: 210px;\n  position: relative;\n  border: 1px solid grey;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n\n  &:after {\n    display: block;\n    position: absolute;\n    content: "";\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: green;\n    transition: height ease 0.3s;\n    width: 100%;\n    height: ',";\n  }\n"]);return O=function(){return n},n}function y(){var n=Object(b.a)(["\n        transform: scale(1.1, 1.1);\n      "]);return y=function(){return n},n}function w(){var n=Object(b.a)(["\n  width: 100%;\n  height: auto;\n  transition: all ease 0.3s;\n\n  ","\n"]);return w=function(){return n},n}function k(){var n=Object(b.a)(["\n  display: flex;\n  padding: 10px;\n"]);return k=function(){return n},n}function z(){var n=Object(b.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  font-size: 24px;\n  margin-top: 0;\n']);return z=function(){return n},n}function G(){var n=Object(b.a)(['\n  font-family: "Grenze Gotisch", cursive;\n  text-align: center;\n']);return G=function(){return n},n}function S(){var n=Object(b.a)(["\n  from {\n    transform: rotateY(0deg);\n  }\n\n  to {\n    transform: rotateY(360deg);\n  }\n"]);return S=function(){return n},n}var Y=Object(d.c)(S()),M=d.b.h1(G()),N=d.b.h2(z()),A=d.b.div(k()),B=d.b.img(w(),(function(n){if(n.active)return Object(d.a)(y())})),C=d.b.div(O(),(function(n){var e=n.value;return"".concat(e,"%")})),J=d.b.span(j()),T=d.b.div(x(),(function(n){if(n.active)return Object(d.a)(E(),Y)})),W=d.b.button(g()),F=d.b.div(h()),I=d.b.p(v()),P=d.b.div(p(),(function(n){return n.fullWidth?"1 1 100%":"1 1 33.331%"}));var q=function(){var n=Object(a.useState)([0,0,0,0]),e=Object(o.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([100,100]),l=Object(o.a)(i,2),s=l[0],b=l[1],d=Object(a.useState)("Click Attack"),p=Object(o.a)(d,2),v=p[0],h=p[1],g=Object(a.useState)(!1),E=Object(o.a)(g,2),x=E[0],j=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Battle Simulator"),r.a.createElement(A,null,r.a.createElement(F,null,r.a.createElement(P,null,r.a.createElement(B,{src:f.a,active:x})),r.a.createElement(P,null,r.a.createElement(C,{value:s[0]}),r.a.createElement(J,null,s[0]>0?s[0]:0)),r.a.createElement(P,null,r.a.createElement(T,{active:x},r.a.createElement("span",{className:"dice-".concat(t[0])})),r.a.createElement(T,{active:x},r.a.createElement("span",{className:"dice-".concat(t[1])})),r.a.createElement(J,null,t[0]+t[1])),r.a.createElement(I,null,"Player")),r.a.createElement(F,null,r.a.createElement(P,{fullWidth:!0},r.a.createElement(N,null,v),r.a.createElement(W,{onClick:function(n){var e=function(n){for(var e=[],t=Object(m.a)(n),a="",r=0;r<4;r++)e.push(Math.floor(6*Math.random())+1);var c=e[0]+e[1],i=e[2]+e[3];return c>i?(t[1]=t[1]-c+i,a=t[1]<1?"You win!":"".concat("You hit"," ").concat(c-i,"!")):i>c?(t[0]=t[0]-i+c,a=t[0]<1?"Game Over!":"".concat("You got hit"," ").concat(i-c,"!")):a="Tie",{d:e,l:t,r:a}}(s),t=e.d,a=e.l,r=e.r;c(t),b(a),h(r),j(!0),setTimeout((function(){j(!1)}),1e3)},disabled:"You win!"===v||"Game Over!"===v},"Attack!"))),r.a.createElement(F,null,r.a.createElement(P,null,r.a.createElement(B,{src:u.a,active:x})),r.a.createElement(P,null,r.a.createElement(C,{value:s[1]}),r.a.createElement(J,null,s[1]>0?s[1]:0)),r.a.createElement(P,null,r.a.createElement(T,{active:x},r.a.createElement("span",{className:"dice-".concat(t[2])})),r.a.createElement(T,{active:x},r.a.createElement("span",{className:"dice-".concat(t[3])})),r.a.createElement(J,null,t[2]+t[3])),r.a.createElement(I,null,"Monster"))))};t(24);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.65f93229.chunk.js.map