(window.webpackJsonpdemoday=window.webpackJsonpdemoday||[]).push([[0],{35:function(e,t,a){e.exports=a(68)},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(32),r=a.n(s),l=(a(40),a(7)),c=a(8),i=a(10),d=a(9),u=a(5),m=a(11),h=a(15),b=a(13),g=(a(41),a(18)),k=a(12),v=a.n(k),p=a(17),_=a.n(p),E=(a(59),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={key:"",read_author_name:"",read_cover_i:"",read_id_goodreads:"",read_isbn:"",read_title:"",read_subject:"",read_read:"",bookAdded:"invisible"},_.a.enableUniqueIds(Object(u.a)(a)),a.handleButtonAndItsFunctioncall=a.handleButtonAndItsFunctioncall.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleButtonAndItsFunctioncall",value:function(e){var t=this;console.log("Form submitted:"),console.log("Book key: ".concat(this.props.id)),console.log("Book title: ".concat(this.props.title)),console.log("Book Cover number: ".concat(this.props.img)),console.log("Book goodreads id: ".concat(this.props.goodreads)),console.log("Book isbn: ".concat(this.props.isbn)),console.log("Book subject: ".concat(this.props.subject)),console.log("Book readingLink: ".concat(this.props.readingLink)),console.log("Book author name: ".concat(this.props.author_name)),this.setState({read_author_name:this.props.author_name,read_cover_i:this.props.img,read_id_goodreads:this.props.goodreads,read_isbn:this.props.isbn,read_title:this.props.title,read_subject:this.props.subject,read_read:this.props.readingLink,key:this.props.id,bookAdded:"bookAdded"}),setTimeout((function(){var e={read_author_name:t.state.read_author_name[0],read_cover_i:t.state.read_cover_i,read_id_goodreads:t.state.read_id_goodreads,read_isbn:t.state.read_isbn,read_title:t.state.read_title,read_subject:t.state.read_subject,read_read:t.state.read_read,key:t.state.key};v.a.post("http://localhost:4000/reads/add",e).then((function(e){return console.log(e.data)})),t.setState({read_author_name:"",read_cover_i:"",read_id_goodreads:"",read_isbn:"",read_title:"",read_subject:"",read_read:"",bookAdded:"invisible",key:""})}),1e3)}},{key:"render",value:function(e){var t="404"===this.props.goodreads?console.log("Goodreads does not know of this title"):o.a.createElement("div",null,o.a.createElement("h2",null,"Link:  ")," ",o.a.createElement("h3",null," ",o.a.createElement("a",{href:this.props.goodreads,target:"blank"},"To Goodreads")));return o.a.createElement("div",{className:"bookstodisplayDiv"},o.a.createElement("div",{className:this.state.bookAdded},o.a.createElement("h1",null,"Book succesfully added to reading list")),o.a.createElement("img",{src:this.props.img,alt:"cover",className:"CovrImage"}),o.a.createElement("div",{className:"textnextToImg"},o.a.createElement("h2",null,"Title: "),o.a.createElement("h3",null," ",this.props.title.substring(0,35)),o.a.createElement("br",null),o.a.createElement("h2",null,"Author: "),o.a.createElement("h3",null," ",this.props.author_name),o.a.createElement("br",null),t,o.a.createElement("button",{onClick:this.handleButtonAndItsFunctioncall,className:"prettyButton"},"Add to reading list")))}}]),t}(n.Component)),f=(a(60),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).find=function(e){var t=a.state.search?"title":"author",n="http://openlibrary.org/search.json?".concat(t,"=").concat(e);fetch(n).then((function(e){return e.json()})).then((function(e){a.setState({bookData:e.docs,isLoaded:!0})}))},a.state={error:null,bookData:null,toSearch:"",isLoaded:!1,searchTerm:"",search:!1},_.a.enableUniqueIds(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleChangeCheckBox=a.handleChangeCheckBox.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target,n="checkbox"===a.type?a.checked:a.value,o=a.name;this.setState(Object(g.a)({},o,n)),setTimeout((function(){n.length>=5&&t.find(n)}),1e3)}},{key:"handleChangeCheckBox",value:function(e){var t,a=e.target,n="checkbox"===a.type?a.checked:a.value,o=a.name;this.setState((t={},Object(g.a)(t,o,n),Object(g.a)(t,"toSearch",""),t))}},{key:"componentDidMount",value:function(){this.find(this.state.searchTerm),this.state.toSearch.length<=5&&this.setState({bookData:null})}},{key:"render",value:function(){var e=this;console.log(this.state.bookData);var t=this.state,a=t.error,n=t.isLoaded;if(a)return o.a.createElement("div",null,"Error: ",a.message);if(n){var s=this.state.search?"Search for a book title":"Search for an Author",r=this.state.search?"Alter your search to Authors":"Alter your search to books";return o.a.createElement("div",null,o.a.createElement("div",{className:"buttonNning"},o.a.createElement("label",{htmlFor:"author",id:"label",className:"container2"},r,o.a.createElement("div",{className:"container"},o.a.createElement("input",{name:"search",type:"checkbox",id:"author",checked:this.state.author,onChange:this.handleChangeCheckBox}),o.a.createElement("span",{className:"checkmark"})))),o.a.createElement("input",{name:"toSearch",type:"text",placeholder:s,className:"Searchterms",value:this.state.toSearch,onChange:this.handleChange}),o.a.createElement("div",{className:"columnCount"},this.state.bookData.map((function(t){return t.cover_i?o.a.createElement(E,{id:e.nextUniqueId(),title:t.title,author_name:t.author_name,isbn:t.isbn?t.isbn[0]:"No ISBN",subject:t.subject?t.subject[0]:"No Subject",goodreads:t.id_goodreads?"https://www.goodreads.com/book/show/"+t.id_goodreads[0]:"404",readingLink:t.key?t.key:null,img:t.cover_i?"http://covers.openlibrary.org/b/id/"+t.cover_i+"-L.jpg":null}):null}))))}return o.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),y=(a(61),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).IncrementItem=function(){a.setState({offset:a.state.offset+12,page:a.state.page+1}),a.searchGET(a.state.suggestions),console.log(a.state.offset)},a.DecrementItem=function(){a.setState({offset:a.state.offset-12,page:a.state.page-1}),a.searchGET(a.state.suggestions)},a.find=function(e){setTimeout((function(){var e="http://openlibrary.org/subjects/"+a.state.suggestions.toLowerCase()+".json?offset="+a.state.offset;v.a.get(e).then((function(e){a.setState({Getsuggestions:e.data,notYte:!0,div:"visibleDIVBOOK"})})).catch((function(e){console.log(e)})),setTimeout((function(){console.log(a.state.Getsuggestions),console.log(a.state.Getsuggestions.works),console.log(e)}),2e3)}),100)},a.handleDelete=function(e){var t=a.state.readingList.findIndex((function(t){return a.setState({key:t._id}),t.key===e})),n=Object.assign([],a.state.readingList);n.splice(t,1),console.log(n),a.setState({readingList:n,bookDeleted2:"bookDeleted2"}),setTimeout((function(){var e="http://localhost:4000/reads/delete-read/"+a.state.key;v.a.delete(e).then((function(e){console.log("Book successfully deleted!")})).catch((function(e){console.log(e)})),a.setState({bookDeleted2:"invisible",key:null})}),1e3)},a.state={error:null,bookData:null,isLoaded:!1,readingList:[],key:"",read_author_name:"",read_cover_i:"",read_id_goodreads:"",read_isbn:"",read_title:"",read_subject:"",read_read:"",search:"",notYte:!1,suggestions:"",Getsuggestions:[],bookDeleted2:"invisible",div:"invisible",bookAdded2:"invisible",offset:1,page:1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleStateOfdiv",value:function(){this.setState({div:"invisible",offset:1,page:1})}},{key:"handleButtonAndItsFunction",value:function(e){var t=this;console.log("Form submitted:"),console.log("Book key: ".concat(e.key)),console.log("Book title: ".concat(e.title)),console.log("Book Cover number: ".concat("http://covers.openlibrary.org/b/id/"+e.cover_id+"-L.jpg")),console.log("Book subject: ".concat(e.subject)),console.log("Book readingLink: ".concat(e.key)),console.log("Book author name: ".concat(e.authors[0].name)),this.setState({read_author_name:e.authors[0].name,read_cover_i:"http://covers.openlibrary.org/b/id/"+e.cover_id+"-L.jpg",read_title:e.title,read_subject:e.subject,read_read:e.key,key:e.key,bookAdded2:"bookAdded2"}),setTimeout((function(){var e={read_author_name:t.state.read_author_name,read_cover_i:t.state.read_cover_i,read_title:t.state.read_title,read_subject:t.state.read_subject[0],read_read:t.state.read_read,key:t.state.key},a=Object.assign([],t.state.readingList);a.push(e),console.log(e),v.a.post("http://localhost:4000/reads/add",e).then((function(e){return console.log(e.data)})),t.setState({readingList:a,read_author_name:"",read_cover_i:"",read_id_goodreads:"",read_isbn:"",read_title:"",read_subject:"",read_read:"",key:""}),setTimeout((function(){t.setState({bookAdded2:"invisible"})}),1e3)}),100)}},{key:"searchGET",value:function(e){var t=this;setTimeout((function(){void 0===e?console.log("not yet"):(console.log("wohuu"),t.setState({suggestions:e.replace(/ /g,"_"),notYte:!1,Getsuggestions:[]}),console.log(t.state.suggestions),setTimeout((function(){t.find(t.state.suggestions)}),100))}),100)}},{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:4000/reads/").then((function(t){e.setState({readingList:t.data,isLoaded:!0})})).catch((function(e){console.log(e)})),setTimeout((function(){console.log(e.state.readingList)}),100)}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded;return a?o.a.createElement("div",null,"Error: ",a.message):n?o.a.createElement("div",{className:"columncountGRL"},this.state.readingList.map((function(t){return o.a.createElement("div",{className:"bookstodisplayDivG",key:t.key},o.a.createElement("div",{className:"textnextToImgGet"},o.a.createElement("img",{src:t.read_cover_i,alt:"cover",className:"CovrImageGet"}),o.a.createElement("div",{className:"textOnImage"},t.read_read?o.a.createElement("h2",null,o.a.createElement("a",{href:"https://openlibrary.org"+t.read_read,target:"blank",className:"Getsuggup"},"Read ",o.a.createElement("br",null)," ",t.read_title.substring(0,40))):o.a.createElement("h2",null,t.read_title.substring(0,40)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",null,"BY "),o.a.createElement("br",null),o.a.createElement("h2",null," ",t.read_author_name),o.a.createElement("br",null),o.a.createElement("button",{onClick:e.handleDelete.bind(e,t.key),className:"prettyButtonGET"},"X"),o.a.createElement("button",{onClick:e.searchGET.bind(e,t.read_subject),className:"Getsugg"}," ","More "+t.read_subject.substring(0,20))),o.a.createElement("div",{className:e.state.bookDeleted2},o.a.createElement("h1",null,"Book succesfully deleted"))))})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:this.state.div},o.a.createElement("h2",{className:"suggestionsToTitle"},this.state.suggestions.replace(/_/g," ")+" "+this.state.page),this.state.offset>12?[o.a.createElement("button",{onClick:this.DecrementItem.bind(this),className:"prettyButtonGETUPLess"},"Less Books"),o.a.createElement("button",{onClick:this.IncrementItem.bind(this),className:"prettyButtonGETUPMore"},"More Books")]:o.a.createElement("button",{onClick:this.IncrementItem.bind(this),className:"prettyButtonGETUPMore"},"More Books"),o.a.createElement("button",{onClick:this.handleStateOfdiv.bind(this),className:"ButtonToreturnYuBackToyourList"},"X"),this.searchGET(this.props.item),!0===this.state.notYte?this.state.Getsuggestions.works.map((function(t){return o.a.createElement("div",{className:"textnextToImgGetUP",key:t.key},t.cover_id?o.a.createElement("img",{src:"http://covers.openlibrary.org/b/id/"+t.cover_id+"-L.jpg",alt:"cover",className:"CovrImageGetUP"}):null,o.a.createElement("div",{className:"textOnImage"},t.key?o.a.createElement("h2",null,o.a.createElement("a",{href:"https://openlibrary.org"+t.key,target:"blank",className:"Getsuggup"},"Read ",o.a.createElement("br",null)," ",t.title.substring(0,40))):t.title.substring(0,40),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",null,"BY "),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h2",null," ",t.authors[0]?t.authors[0].name:"No Author"),o.a.createElement("br",null),o.a.createElement("button",{onClick:e.handleButtonAndItsFunction.bind(e,t),className:"prettyButtonGETUP"},"Add to reading list"),o.a.createElement("button",{onClick:e.searchGET.bind(e,t.subject[0]),className:"Getsugg"}," ","More "+t.subject[0])))})):null),o.a.createElement("div",{className:this.state.bookAdded2},o.a.createElement("h1",null,"Book succesfully added to reading list"))):o.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),j=(a(62),[]),N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).state={getReadingList:[],error:null,getSubjects:[],isLoaded:!1,subjectData:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({getReadingList:[],getSubjects:[]}),j=[],v.a.get("http://localhost:4000/reads/").then((function(t){e.setState({getReadingList:t.data,isLoaded:!0})})).catch((function(e){console.log(e)})),setTimeout((function(){e.state.getReadingList.map((function(e){return e.read_subject?j.push(e.read_cover_i):console.log("no subject")})),e.setState({getSubjects:j}),console.log(e.state.getSubjects)}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;return t?o.a.createElement("div",null,"Error: ",t.message):a?o.a.createElement("div",{className:"BGIMAGE"},o.a.createElement("h1",{className:"titleOfMyApp"},"Create your own reading list"),this.state.getSubjects.map((function(e,t){return o.a.createElement("div",null,o.a.createElement("img",{src:e,alt:"cover",className:"images"}))}))):o.a.createElement("div",null,"Loading...")}}]),t}(n.Component),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(d.a)(t).call(this))).state={click:!0},e.ButtonPress=e.ButtonPress.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"ButtonPress",value:function(){this.setState((function(e){return{click:!e.click}})),console.log(this.state.click)}},{key:"render",value:function(){var e=this.state.click?"navbar":"navbar1";return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.ButtonPress,className:"hamburgerMenu"}," \u2630"),o.a.createElement(h.a,null,o.a.createElement("div",{className:"nav-container"},o.a.createElement("nav",{className:e},o.a.createElement("a",{className:"navbar-brand",href:"http://localhost:3000.com",target:"_blank",rel:"noopener noreferrer"}),o.a.createElement(h.b,{to:"/",className:"navbar-brand"}),o.a.createElement("div",{className:"test"},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"navbar-item"},o.a.createElement(h.b,{to:"Home/",className:"nav-link"},"Home")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(h.b,{to:"/Search",className:"nav-link"},"Search")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(h.b,{to:"/ReadingList",className:"nav-link"},"Reading list"))))),o.a.createElement("br",null),o.a.createElement(b.a,{path:"/Home/",component:N}),o.a.createElement(b.a,{path:"/Search/",component:f}),o.a.createElement(b.a,{path:"/ReadingList/",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.ac0729cb.chunk.js.map