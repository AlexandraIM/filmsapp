(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(48),c=t.n(i),o=t(20),l=t(28),u=(t(98),t(14)),s=t(15),f=t(17),d=t(16),p=t(18),m=t(29),h=t(5),b=t(6);function v(){var e=Object(h.a)(["\n  overflow: hidden;\n  background-color: #f5f5f0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 5px 5px;\n  text-align: center;\n  color: #ff0000;\n  margin-bottom: 10px;\n"]);return v=function(){return e},e}var g=b.a.div(v()),E=function(e){return a.a.createElement(g,null,a.a.createElement("h1",null,e.header))};function O(){var e=Object(h.a)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 300px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n  padding: 10px;\n  margin: 5px;\n  background-color: #fff;\n  cursor: pointer;\n"]);return O=function(){return e},e}var j=b.a.div(O()),x=function(e){return a.a.createElement(j,{onClick:function(){return e.clicked(e.id)}},a.a.createElement("img",{alt:"film poster",src:e.src}),a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.year))},y=t(21),k=t(67),w=t.n(k);w.a.initializeApp({apiKey:"AIzaSyAeYNRj5191QwKNJbWMVvakRASTsT_YbFQ",authDomain:"filmsdb-ce541.firebaseapp.com",databaseURL:"https://filmsdb-ce541.firebaseio.com",projectId:"filmsdb-ce541",storageBucket:"filmsdb-ce541.appspot.com",messagingSenderId:"838623909312"});var T=w.a.database();var S="GET_MOVIES",I="SAVE_FILM",_="GET_FILM";function C(e){return function(n){return function(e){var n={Poster:e.Poster,Title:e.Title,Type:e.Type,Year:e.Year,imdbID:e.imdbID};return T.ref("films/"+e.id).set(n).then(function(e){return e})}(e).then(function(t){return n(function(e){return{type:I,film:e}}(e))})}}function D(){return function(e){return T.ref("films").once("value").then(function(e){return Object.keys(e.val()).map(function(n){return Object(y.a)({},e.val()[n],{id:n})})}).catch(function(e){return e}).then(function(n){return e(function(e){return{type:S,data:e}}(n))})}}function F(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]);return F=function(){return e},e}var Y=b.a.div(F()),B=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getFilms()}},{key:"render",value:function(){var e=this.props.films.map(function(e){return a.a.createElement(l.b,{to:"/film/".concat(e.id),key:e.id},a.a.createElement(x,{title:e.Title,src:e.Poster,year:e.Year,id:e.id,clicked:function(){console.log("test")}}))});return a.a.createElement(Y,null,e)}}]),n}(a.a.Component),M=Object(o.b)(function(e){return{films:e.films}},function(e){return{getFilms:function(){return e(D())}}})(B),P=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(M,null)}}]),n}(a.a.Component);function A(){var e=Object(h.a)(["\n    border: none;\n    color: white;\n    padding: 14px 28px;\n    margin: 5px;\n    cursor: pointer;\n    background: ",";\n    border-radius: 5px;\n"]);return A=function(){return e},e}var N=b.a.button(A(),function(e){return e.color}),L=function(e){return a.a.createElement(N,{color:e.color,onClick:e.clicked},e.children)};function R(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n"]);return R=function(){return e},e}function V(){var e=Object(h.a)(["\n  width: 50%;\n  background-color: white;\n  padding: 14px 20px;\n  margin: auto;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align:center;\n"]);return V=function(){return e},e}var H=b.a.div(V()),X=b.a.div(R()),z=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).handleEditFilm=function(){console.log("handleEditFilm",t.props),t.props.history.push(t.props.match.url+"/edit")},t.handleBack=function(){t.props.history.goBack()},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getFilm(this.props.match.params.id)}},{key:"render",value:function(){var e=this,n=this.props.films.map(function(n){return r.createElement(l.b,{to:"/film/".concat(n.id),key:n.id},r.createElement(x,{title:n.Title,src:n.Poster,year:n.Year,id:n.id,clicked:function(){e.props.getFilm(n.id)}}))});return r.createElement("div",null,r.createElement(H,null,r.createElement("h2",null,this.props.film.Title),r.createElement("img",{alt:"film poster",src:this.props.film.Poster}),r.createElement("p",null,this.props.film.Year),r.createElement(L,{color:"blue",clicked:this.handleEditFilm},"Edit"),r.createElement(L,{color:"lightblue",clicked:this.handleBack},"Back")),r.createElement(X,null,n))}}]),n}(r.Component),J=Object(o.b)(function(e){return{film:e.filmToShow,films:e.films.sort(function(){return.5-Math.random()}).slice(0,3)}},function(e){return{getFilm:function(n){return e(function(e){return console.log(e),{type:_,filmId:e}}(n))}}})(z),U=t(50);function W(){var e=Object(h.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return W=function(){return e},e}function G(){var e=Object(h.a)(["\n  width: 100%;\n  background-color: white;\n  padding: 14px 20px;\n  margin: 8px 0px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n"]);return G=function(){return e},e}var K=b.a.div(G()),Q=b.a.input(W()),$=function(e){function n(){var e,t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={imdbID:"",Poster:"",Title:"",Year:""},t.changeHandler=function(e){var n=e.target.name,r=e.target.value;t.setState(Object(U.a)({},n,r))},t.handleCancel=function(e){e.preventDefault(),t.props.history.goBack()},t.handleSave=function(e){e.preventDefault(),t.props.save(t.state),t.props.history.goBack()},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState(Object(y.a)({},this.props.film))}},{key:"render",value:function(){var e=this;return r.createElement(K,null,r.createElement("form",null,r.createElement("label",null,"Image source:"),r.createElement(Q,{type:"text",value:this.state.Poster,name:"Poster",onChange:this.changeHandler}),r.createElement("label",null,"Title:"),r.createElement(Q,{type:"text",value:this.state.Title,name:"Title",onChange:this.changeHandler}),r.createElement("label",null,"Year"),r.createElement(Q,{type:"text",value:this.state.Year,name:"Year",onChange:this.changeHandler}),r.createElement(L,{clicked:function(n){return e.handleSave(n)},color:"green"},"Save"),r.createElement(L,{clicked:function(n){return e.handleCancel(n)},color:"red"},"Cancel")))}}]),n}(r.Component),q=Object(o.b)(function(e){return{film:e.filmToShow}},function(e){return{save:function(n){return e(C(n))}}})($),Z=function(e){function n(){return Object(u.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.createElement("div",null,r.createElement(E,{header:"Some cool films"}),r.createElement(m.a,{exact:!0,path:"/",component:P}),r.createElement(m.a,{exact:!0,path:"/film/:id",component:J}),r.createElement(m.a,{exact:!0,path:"/film/:id/edit",component:q}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=t(33),ne=t(85),te=t(87),re={films:[],filmToShow:{}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case S:return Object(y.a)({},e,{films:n.data});case I:var t=Object(te.a)(e.films),r=t.findIndex(function(e){return e.id===n.film.id});return t[r]=n.film,Object(y.a)({},e,{films:t,filmToShow:n.film});case _:return console.log(n.filmId),Object(y.a)({},e,{filmToShow:e.films.find(function(e){return e.id===n.filmId})});default:return e}},ie=t(86),ce=t.n(ie),oe=Object(ee.d)(ae,Object(ee.c)(Object(ee.a)(ne.a,ce.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.createElement(l.a,null,r.createElement(o.a,{store:oe},r.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,n,t){e.exports=t(157)},98:function(e,n,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.d7944057.chunk.js.map