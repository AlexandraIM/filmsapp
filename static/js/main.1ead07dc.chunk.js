(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(45),c=t.n(i),o=t(18),l=t(25),u=(t(95),t(11)),s=t(12),f=t(14),d=t(13),p=t(15),m=t(26),h=t(3),b=t(4);function v(){var e=Object(h.a)(["\n  overflow: hidden;\n  background-color: #f5f5f0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 5px 5px;\n  text-align: center;\n  color: #ff0000;\n  margin-bottom: 10px;\n"]);return v=function(){return e},e}var g=b.a.div(v()),E=function(e){return a.a.createElement(g,null,a.a.createElement("h1",null,e.header))};function O(){var e=Object(h.a)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n  padding: 10px;\n  margin: 5px;\n  background-color: #fff;\n  cursor: pointer;\n"]);return O=function(){return e},e}var j=b.a.div(O()),x=function(e){return a.a.createElement(j,{onClick:function(){return e.clicked(e.id)}},a.a.createElement("img",{alt:"film poster",src:e.src}),a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.year))},y=t(19),k=t(64);t(144);k.initializeApp({apiKey:"AIzaSyAeYNRj5191QwKNJbWMVvakRASTsT_YbFQ",authDomain:"filmsdb-ce541.firebaseapp.com",databaseURL:"https://filmsdb-ce541.firebaseio.com",projectId:"filmsdb-ce541",storageBucket:"filmsdb-ce541.appspot.com",messagingSenderId:"838623909312"});var w=k.database();var T="GET_MOVIES",S="SAVE_FILM",I="GET_FILM";function _(e){return function(n){return function(e){var n={Poster:e.Poster,Title:e.Title,Type:e.Type,Year:e.Year,imdbID:e.imdbID};return w.ref("films/"+e.id).set(n).then(function(e){return e})}(e).then(function(t){return n(function(e){return{type:S,film:e}}(e))})}}function C(){return function(e){return w.ref("films").once("value").then(function(e){return Object.keys(e.val()).map(function(n){return Object(y.a)({},e.val()[n],{id:n})})}).catch(function(e){return e}).then(function(n){return e(function(e){return{type:T,data:e}}(n))})}}function D(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]);return D=function(){return e},e}var F=b.a.div(D()),Y=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getFilms()}},{key:"render",value:function(){var e=this.props.films.map(function(e){return a.a.createElement(l.b,{to:"/film/".concat(e.id),key:e.id},a.a.createElement(x,{title:e.Title,src:e.Poster,year:e.Year,id:e.id,clicked:function(){console.log("test")}}))});return a.a.createElement(F,null,e)}}]),n}(a.a.Component),B=Object(o.b)(function(e){return{films:e.films}},function(e){return{getFilms:function(){return e(C())}}})(Y),M=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(B,null)}}]),n}(a.a.Component);function P(){var e=Object(h.a)(["\n    border: none;\n    color: white;\n    padding: 14px 28px;\n    margin: 5px;\n    cursor: pointer;\n    background: ",";\n    border-radius: 5px;\n"]);return P=function(){return e},e}var A=b.a.button(P(),function(e){return e.color}),N=function(e){return a.a.createElement(A,{color:e.color,onClick:e.clicked},e.children)};function L(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]);return L=function(){return e},e}function R(){var e=Object(h.a)(["\n  width: 50%;\n  background-color: white;\n  padding: 14px 20px;\n  margin: auto;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align:center;\n"]);return R=function(){return e},e}var V=b.a.div(R()),H=b.a.div(L()),X=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).handleEditFilm=function(){console.log("handleEditFilm",t.props),t.props.history.push(t.props.match.url+"/edit")},t.handleBack=function(){t.props.history.goBack()},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getFilm(this.props.match.params.id)}},{key:"render",value:function(){var e=this,n=this.props.films.map(function(n){return r.createElement(l.b,{to:"/film/".concat(n.id),key:n.id},r.createElement(x,{title:n.Title,src:n.Poster,year:n.Year,id:n.id,clicked:function(){e.props.getFilm(n.id)}}))});return r.createElement("div",null,r.createElement(V,null,r.createElement("h2",null,this.props.film.Title),r.createElement("img",{alt:"film poster",src:this.props.film.Poster}),r.createElement("p",null,this.props.film.Year),r.createElement(N,{color:"blue",clicked:this.handleEditFilm},"Edit"),r.createElement(N,{color:"lightblue",clicked:this.handleBack},"Back")),r.createElement(H,null,n))}}]),n}(r.Component),z=Object(o.b)(function(e){return{film:e.filmToShow,films:e.films.sort(function(){return.5-Math.random()}).slice(0,3)}},function(e){return{getFilm:function(n){return e(function(e){return console.log(e),{type:I,filmId:e}}(n))}}})(X),J=t(47);function U(){var e=Object(h.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return U=function(){return e},e}function W(){var e=Object(h.a)(["\n  width: 100%;\n  background-color: white;\n  padding: 14px 20px;\n  margin: 8px 0px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n"]);return W=function(){return e},e}var G=b.a.div(W()),K=b.a.input(U()),Q=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={imdbID:"",Poster:"",Title:"",Year:""},t.changeHandler=function(e){var n=e.target.name,r=e.target.value;t.setState(Object(J.a)({},n,r))},t.handleCancel=function(e){e.preventDefault(),t.props.history.goBack()},t.handleSave=function(e){e.preventDefault(),t.props.save(t.state),t.props.history.goBack()},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(y.a)({},this.props.film))}},{key:"render",value:function(){var e=this;return r.createElement(G,null,r.createElement("form",null,r.createElement("label",null,"Image source:"),r.createElement(K,{type:"text",value:this.state.Poster,name:"Poster",onChange:this.changeHandler}),r.createElement("label",null,"Title:"),r.createElement(K,{type:"text",value:this.state.Title,name:"Title",onChange:this.changeHandler}),r.createElement("label",null,"Year"),r.createElement(K,{type:"text",value:this.state.Year,name:"Year",onChange:this.changeHandler}),r.createElement(N,{clicked:function(n){return e.handleSave(n)},color:"green"},"Save"),r.createElement(N,{clicked:function(n){return e.handleCancel(n)},color:"red"},"Cancel")))}}]),n}(r.Component),$=Object(o.b)(function(e){return{film:e.filmToShow}},function(e){return{save:function(n){return e(_(n))}}})(Q),q=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.createElement("div",null,r.createElement(E,{header:"Some cool films"}),r.createElement(m.a,{exact:!0,path:"/",component:M}),r.createElement(m.a,{exact:!0,path:"/film/:id",component:z}),r.createElement(m.a,{exact:!0,path:"/film/:id/edit",component:$}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=t(30),ee=t(82),ne=t(84),te={films:[],filmToShow:{}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T:return Object(y.a)({},e,{films:n.data});case S:var t=Object(ne.a)(e.films),r=t.findIndex(function(e){return e.id===n.film.id});return t[r]=n.film,Object(y.a)({},e,{films:t,filmToShow:n.film});case I:return console.log(n.filmId),Object(y.a)({},e,{filmToShow:e.films.find(function(e){return e.id===n.filmId})});default:return e}},ae=t(83),ie=t.n(ae),ce=Object(Z.d)(re,Object(Z.c)(Object(Z.a)(ee.a,ie.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.createElement(l.a,null,r.createElement(o.a,{store:ce},r.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,n,t){e.exports=t(150)},95:function(e,n,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.1ead07dc.chunk.js.map