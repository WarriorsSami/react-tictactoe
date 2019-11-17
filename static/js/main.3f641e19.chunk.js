(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=n(1),l=n(4),f=n.n(l),p=a.a.createContext(),h="MAKE_MOVE",m="RESET_GAME",v=function(e,t){return{type:h,x:e,y:t}},d=n(2),b=n.n(d),y=a.a.memo((function(e){var t=e.value,n=e.x,o=e.y,i=Object(r.useContext)(p),c=[b.a.root],s=Object(r.useCallback)((function(){return i(v(n,o))}),[i,n,o]),u=String.fromCharCode(160);return 1===t?u="X":2===t?u="O":c.push(b.a.open),a.a.createElement("div",{className:c.join(" "),onClick:s},a.a.createElement("div",{className:b.a.symbol},u))}),(function(e,t){return e.value===t.value}));y.displayName="TicTacToeSpace";var w=y,g=n(7),x=n.n(g),_=a.a.memo((function(e){var t=e.rows,n=e.x;return a.a.createElement("div",{className:x.a.root},t.map((function(e,t){return a.a.createElement(w,{key:"".concat(n,"_").concat(t),value:e,x:n,y:t})})))}),(function(e,t){return e.rows.every((function(e,n){return t.rows[n]===e}))&&e.x===t.x}));_.displayName="TicTacToeColumn",_.propTypes={rows:f.a.array.isRequired,x:f.a.number.isRequired};var O=_,E=n(8),k=n.n(E);function P(e,t){return t+e.reduce((function(e,t){return e+t}),"")}var j=function(e){var t=e.columns;return a.a.createElement("div",{className:k.a.root},t.map((function(e,t){return a.a.createElement(O,{key:P(e,t),rows:e,x:t})})))};j.displayName="TicTacToe";var T=j,S=[[0,0],[2,0],[0,2],[2,2]],C=9;function N(e){var t=e.winner,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t?n+(1===t?C:-C):0}function M(e){return 8===e.openSpaces.length?0===e.board[1][1]?[1,1]:S[Math.floor(4*Math.random())]:function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n>=C)throw new Error("Minimax reached impossible depth");if(0!==t.winner)return{score:N(t,n)};var r=[],a=[];t.openSpaces.forEach((function(o){var i=e(t.cloneMove.apply(t,o),n+1).score;r.push(o),a.push(i)}));var o=a.indexOf(Math[1===t.nextPlayer?"max":"min"].apply(Math,a));return{move:r[o],score:a[o]}}(e).move}var A=n(9),R=n(10),W=n(11);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var B=[[[0,0],[0,1],[0,2]],[[0,0],[1,0],[2,0]],[[2,0],[2,1],[2,2]],[[0,2],[1,2],[2,2]],[[1,0],[1,1],[1,2]],[[0,1],[1,1],[2,1]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]];function q(e,t,n){var r=Object(u.a)(e,2),a=r[0],o=r[1],i=Object(u.a)(t,2),c=i[0],s=i[1],l=Object(u.a)(n,2),f=l[0],p=l[1],h=this[a][o];return this[c][s]===h&&this[f][p]===h?h:0}function G(e){var t=e.openSpaces;if(t.length>4)return 0;var n=B.length,r=0;do{r=q.apply(e.board,B[n-1]),n--}while(!r&&n>0);return r||0!==t.length?r:-1}var J=function(e,t){return e>=0&&e<3&&t>=0&&t<3},U=new(function(){function e(t){Object(R.a)(this,e),this.reset(t)}return Object(W.a)(e,[{key:"reset",value:function(e){return this._state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({board:[[0,0,0],[0,0,0],[0,0,0]],nextPlayer:1,winner:0},e),e&&(this._state.winner=G(this)),this._state}},{key:"move",value:function(e,t){var n=this._state;return!J(e,t)||0!==this.winner||this.board[e][t]?n:(n.board[e][t]=n.nextPlayer,n.winner=G(this),n.nextPlayer=1===n.nextPlayer?2:1,n)}},{key:"cloneMove",value:function(t,n){if(!J(t,n)||0!==this.winner||this.board[t][n])return this;var r=this.board.map((function(e){return e.slice()}));return r[t][n]=this.nextPlayer,new e({board:r,nextPlayer:1===this.nextPlayer?2:1})}},{key:"board",get:function(){return this._state.board}},{key:"nextPlayer",get:function(){return this._state.nextPlayer}},{key:"openSpaces",get:function(){for(var e=[],t=0;t<3;t++)for(var n=0;n<3;n++)this.board[t][n]||e.push([t,n]);return e}},{key:"winner",get:function(){return this._state.winner}}]),e}()),I={board:[[0,0,0],[0,0,0],[0,0,0]],nextPlayer:1,winner:0},L=function(e){return{board:e.board,nextPlayer:e.nextPlayer,winner:e.winner}};function F(e,t){var n=t.type,r=t.x,a=t.y;switch(n){case h:return L(U.move(r,a));case m:return L(U.reset());default:return e}}var H=n(3),K=n.n(H),Q=function(){var e=Object(r.useReducer)(F,I),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(r.useCallback)((function(){return o({type:m})}),[o]);Object(r.useEffect)((function(){0===n.winner&&2===n.nextPlayer&&o(v.apply(U,M(U)))}));var c="Game on! :)";return n.winner>0?c="Player "+n.winner+" has won the game!":-1===n.winner&&(c="The game has been drawn!"),a.a.createElement(a.a.Fragment,null,a.a.createElement(p.Provider,{value:o},a.a.createElement(T,{columns:n.board})),a.a.createElement("div",{className:K.a.message},c),a.a.createElement("button",{className:K.a.btn,onClick:i},"Reset Game"),a.a.createElement("div",{className:K.a.github},a.a.createElement("iframe",{frameBorder:"0",height:"20px",scrolling:"0",src:"https://ghbtns.com/github-btn.html?user=awkaiser&repo=react-tictactoe&type=star",title:"github-star",width:"51px"}),a.a.createElement("iframe",{frameBorder:"0",height:"20px",scrolling:"0",src:"https://ghbtns.com/github-btn.html?user=awkaiser&type=follow",title:"github-follow",width:"123px"})))};Q.displayName="App";var V=Q;i.a.render(a.a.createElement(V,null),document.getElementById("tictactoe")),function(e){if("serviceWorker"in navigator){if(new URL("/react-tictactoe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-tictactoe","/service-worker.js");c?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):s(t,e)}))}}()},2:function(e,t,n){e.exports={root:"Space_root__3EmfC",open:"Space_open__3PZqm",symbol:"Space_symbol__2D9HM"}},3:function(e,t,n){e.exports={message:"App_message__1bgJE",btn:"App_btn__aBDMl",github:"App_github__2ty2b"}},7:function(e,t,n){e.exports={root:"Column_root__3k8N7"}},8:function(e,t,n){e.exports={root:"TicTacToe_root__ITQpp"}}},[[12,1,2]]]);
//# sourceMappingURL=main.3f641e19.chunk.js.map