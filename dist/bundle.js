!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,window.onload=()=>{const e=document.getElementById("search-input"),t=new SpeechRecognition;t.interimResults=!0,t.start(),t.addEventListener("result",t=>{const n=Array.from(t.results).map(e=>e[0]).map(e=>e.transcript).join("");e.value=n}),t.addEventListener("end",t.start)}},function(e,t,n){"use strict";n.r(t);let a=new Date;const i=()=>{return{1:"winter",2:"winter",3:"spring",4:"spring",5:"spring",6:"summer",7:"summer",8:"summer",9:"autumn",10:"autumn",11:"autumn",12:"winter"}[(new Date).getMonth()+1]},r=e=>e<6?"night":e<12?"morning":e<18?"day":e<23?"evening":"night";async function o(...e){let t;if(e.length<2?(a=new Date,t=await c()):(t=await c(e[1]),a=10800===t?new Date(Date.now()):new Date(Date.now()-108e5+1e3*t)),"be"===e[0]){const e=["Стдудзеня","Лютага","Сакавіка","Красавіка","Мая","Чэрвеня","Ліпеня","Жниўня","Верасня","Кастрычніка","Лістапада","Снежня"];return`${["Ндз","Пнд","Аўт","Срд","Чц","Птн","Сбт"][a.getDay()]}, ${a.getDate()} ${e[a.getMonth()]}, ${a.getHours()}:${a.getMinutes()} `}return a.toLocaleString(e[0],{weekday:"short",hour:"2-digit",minute:"2-digit",month:"long",day:"numeric",hour12:!1})}const s=(e,t)=>{let n;switch(t){case"en":n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];break;case"ru":n=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];break;case"be":n=["Нядзеля","Панядзелак","Аўторак","Серада","Чацвер","Пятніца","Субота"];break;default:throw new Error("Incorrect language")}let i=a.getDay()+e;if(i<n.length)return n[i];for(;i>=n.length;)i-=n.length;return n[i]};async function l(){return(await fetch("https://ipinfo.io/json?token=3ad064711c140a").then(e=>e.json())).city}async function c(...e){if(!e.length){const e="https://ipinfo.io/json?token=3ad064711c140a";return(await fetch(e).then(e=>e.json())).timezone}const t=`https://api.openweathermap.org/data/2.5/forecast?q=${e[0]}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`;return(await fetch(t).then(e=>e.json())).city.timezone}async function d(...e){let t;if(!e.length){t="https://ipinfo.io/json?token=3ad064711c140a";const e=await fetch(t).then(e=>e.json());return[e.city,e.country]}t=1===e.length?`https://api.openweathermap.org/data/2.5/forecast?q=${e[0]}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`:`https://api.openweathermap.org/data/2.5/forecast?lat=${e[1]}&lon=${e[0]}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`;const n=await fetch(t).then(e=>e.json());return[n.city.name,n.city.country]}async function u(...e){let t;const n=`https://api.openweathermap.org/data/2.5/forecast?q=${t=e.length?e[0]:await l()}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`;return await fetch(n).then(e=>e.json())}async function h(...e){let t;const n=`https://api.openweathermap.org/data/2.5/forecast?q=${t=e.length?e[0]:await l()}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`,a=await fetch(n).then(e=>e.json());return[[Math.round(a.list[0].main.temp),a.list[0].weather[0].icon],[Math.round(a.list[8].main.temp),a.list[8].weather[0].icon],[Math.round(a.list[16].main.temp),a.list[16].weather[0].icon],[Math.round(a.list[24].main.temp),a.list[24].weather[0].icon]]}async function m(...e){let t,n;e.length?(t=(t=await u(e[0])).city.name,n=await u(t)):(t=await l(),n=await u()),n=n.list[0].weather[0].main;const a=`https://api.unsplash.com/photos/random?query=${await i()},${n},${r((new Date).getHours())},${t}&client_id=230f4057a5f3db6356e7ecc599dfea70f56ec7c5aa39f52fe4519034685dfd49`,o=await fetch(a).then(e=>e.json());document.querySelector("body").style.backgroundImage=`url(${o.urls.full})`}const p=e=>{const t=0|e;return`${t}°${60*Math.abs(e-t)|0}'`};async function S(...e){let t,n;if(e.length)t=e[0],n=e[1];else{const e=await u();t=e.city.coord.lon,n=e.city.coord.lat}return mapboxgl.accessToken="pk.eyJ1IjoiZWxhcmF5IiwiYSI6ImNrNDEyOWc2ZzA3ZGcza3BmeWNnc3U4cWIifQ.PyPYQwDUFrQnaFXpILz-_g",new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[t,n],zoom:9})}async function g(e){const t=await u(e);return"404"===t.cod||"400"===t.cod?-1:[t.city.coord.lon,t.city.coord.lat]}async function T(e,t){const n=`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${t}&text=${e}&key=trnsl.1.1.20191213T134804Z.f3c0207ae1bd61a1.4a6247447729b96142973c7e4dbea3a2683640a1`;return(await fetch(n).then(e=>e.json())).text[0]}const y={BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BA:"Bosnia and Herzegovina",BB:"Barbados",WF:"Wallis and Futuna",BL:"Saint Barthelemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BT:"Bhutan",JM:"Jamaica",BV:"Bouvet Island",BW:"Botswana",WS:"Samoa",BQ:"Bonaire, Saint Eustatius and Saba ",BR:"Brazil",BS:"Bahamas",JE:"Jersey",BY:"Belarus",BZ:"Belize",RU:"Russia",RW:"Rwanda",RS:"Serbia",TL:"East Timor",RE:"Reunion",TM:"Turkmenistan",TJ:"Tajikistan",RO:"Romania",TK:"Tokelau",GW:"Guinea-Bissau",GU:"Guam",GT:"Guatemala",GS:"South Georgia and the South Sandwich Islands",GR:"Greece",GQ:"Equatorial Guinea",GP:"Guadeloupe",JP:"Japan",GY:"Guyana",GG:"Guernsey",GF:"French Guiana",GE:"Georgia",GD:"Grenada",GB:"United Kingdom",GA:"Gabon",SV:"El Salvador",GN:"Guinea",GM:"Gambia",GL:"Greenland",GI:"Gibraltar",GH:"Ghana",OM:"Oman",TN:"Tunisia",JO:"Jordan",HR:"Croatia",HT:"Haiti",HU:"Hungary",HK:"Hong Kong",HN:"Honduras",HM:"Heard Island and McDonald Islands",VE:"Venezuela",PR:"Puerto Rico",PS:"Palestinian Territory",PW:"Palau",PT:"Portugal",SJ:"Svalbard and Jan Mayen",PY:"Paraguay",IQ:"Iraq",PA:"Panama",PF:"French Polynesia",PG:"Papua New Guinea",PE:"Peru",PK:"Pakistan",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PM:"Saint Pierre and Miquelon",ZM:"Zambia",EH:"Western Sahara",EE:"Estonia",EG:"Egypt",ZA:"South Africa",EC:"Ecuador",IT:"Italy",VN:"Vietnam",SB:"Solomon Islands",ET:"Ethiopia",SO:"Somalia",ZW:"Zimbabwe",SA:"Saudi Arabia",ES:"Spain",ER:"Eritrea",ME:"Montenegro",MD:"Moldova",MG:"Madagascar",MF:"Saint Martin",MA:"Morocco",MC:"Monaco",UZ:"Uzbekistan",MM:"Myanmar",ML:"Mali",MO:"Macao",MN:"Mongolia",MH:"Marshall Islands",MK:"Macedonia",MU:"Mauritius",MT:"Malta",MW:"Malawi",MV:"Maldives",MQ:"Martinique",MP:"Northern Mariana Islands",MS:"Montserrat",MR:"Mauritania",IM:"Isle of Man",UG:"Uganda",TZ:"Tanzania",MY:"Malaysia",MX:"Mexico",IL:"Israel",FR:"France",IO:"British Indian Ocean Territory",SH:"Saint Helena",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NA:"Namibia",VU:"Vanuatu",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NZ:"New Zealand",NP:"Nepal",NR:"Nauru",NU:"Niue",CK:"Cook Islands",XK:"Kosovo",CI:"Ivory Coast",CH:"Switzerland",CO:"Colombia",CN:"China",CM:"Cameroon",CL:"Chile",CC:"Cocos Islands",CA:"Canada",CG:"Republic of the Congo",CF:"Central African Republic",CD:"Democratic Republic of the Congo",CZ:"Czech Republic",CY:"Cyprus",CX:"Christmas Island",CR:"Costa Rica",CW:"Curacao",CV:"Cape Verde",CU:"Cuba",SZ:"Swaziland",SY:"Syria",SX:"Sint Maarten",KG:"Kyrgyzstan",KE:"Kenya",SS:"South Sudan",SR:"Suriname",KI:"Kiribati",KH:"Cambodia",KN:"Saint Kitts and Nevis",KM:"Comoros",ST:"Sao Tome and Principe",SK:"Slovakia",KR:"South Korea",SI:"Slovenia",KP:"North Korea",KW:"Kuwait",SN:"Senegal",SM:"San Marino",SL:"Sierra Leone",SC:"Seychelles",KZ:"Kazakhstan",KY:"Cayman Islands",SG:"Singapore",SE:"Sweden",SD:"Sudan",DO:"Dominican Republic",DM:"Dominica",DJ:"Djibouti",DK:"Denmark",VG:"British Virgin Islands",DE:"Germany",YE:"Yemen",DZ:"Algeria",US:"United States",UY:"Uruguay",YT:"Mayotte",UM:"United States Minor Outlying Islands",LB:"Lebanon",LC:"Saint Lucia",LA:"Laos",TV:"Tuvalu",TW:"Taiwan",TT:"Trinidad and Tobago",TR:"Turkey",LK:"Sri Lanka",LI:"Liechtenstein",LV:"Latvia",TO:"Tonga",LT:"Lithuania",LU:"Luxembourg",LR:"Liberia",LS:"Lesotho",TH:"Thailand",TF:"French Southern Territories",TG:"Togo",TD:"Chad",TC:"Turks and Caicos Islands",LY:"Libya",VA:"Vatican",VC:"Saint Vincent and the Grenadines",AE:"United Arab Emirates",AD:"Andorra",AG:"Antigua and Barbuda",AF:"Afghanistan",AI:"Anguilla",VI:"U.S. Virgin Islands",IS:"Iceland",IR:"Iran",AM:"Armenia",AL:"Albania",AO:"Angola",AQ:"Antarctica",AS:"American Samoa",AR:"Argentina",AU:"Australia",AT:"Austria",AW:"Aruba",IN:"India",AX:"Aland Islands",AZ:"Azerbaijan",IE:"Ireland",ID:"Indonesia",UA:"Ukraine",QA:"Qatar",MZ:"Mozambique"},f=["THUNDERSTORM WITH LIGHT RAIN","THUNDERSTORM WITH RAIN","THUNDERSTORM WITH HEAVY RAIN","LIGHT THUNDERSTORM","THUNDERSTORM","HEAVY THUNDERSTORM","RAGGED THUNDERSTORM","THUNDERSTORM WITH LIGHT DRIZZLE","THUNDERSTORM WITH DRIZZLE","THUNDERSTORM WITH HEAVY DRIZZLE","LIGHT INTENSITY DRIZZLE","DRIZZLE","HEAVY INTENSITY DRIZZLE","LIGHT INTENSITY DRIZZLE RAIN","DRIZZLE RAIN","HEAVY INTENSITY DRIZZLE RAIN","SHOWER RAIN AND DRIZZLE","HEAVY SHOWER RAIN AND DRIZZLE","SHOWER DRIZZLE","LIGHT RAIN","MODERATE RAIN","HEAVY INTENSITY RAIN","VERY HEAVY RAIN","EXTREME RAIN","FREEZING RAIN","LIGHT INTENSITY SHOWER RAIN","SHOWER RAIN","HEAVY INTENSITY SHOWER RAIN","RAGGED SHOWER RAIN","LIGHT SNOW","SNOW","HEAVY SNOW","SLEET","LIGHT SHOWER SLEET","SHOWER SLEET","LIGHT RAIN AND SNOW","RAIN AND SNOW","LIGHT SHOWER SNOW","SHOWER SNOW","HEAVY SHOWER SNOW","MIST","SMOKE","HAZE","SAND/ DUST WHIRLS","FOG","SAND","DUST","VOLCANIC ASH","SQUALLS","TORNADO","CLEAR SKY","FEW CLOUDS","SCATTERED CLOUDS","BROKEN CLOUDS","OVERCAST CLOUDS"],E=["ГРОЗА С ЛЕГКИМ ДОЖДЕМ","ГРОЗА С ДОЖДЕМ","ГРОЗА С СИЛЬНЫМ ДОЖДЕМ","ЛЕГКАЯ ГРОЗА","ГРОЗА","СИЛЬНАЯ ГРОЗА","РВАНАЯ ГРОЗА","ГРОЗА С МЕЛКИМ ДОЖДЕМ","ГРОЗА С МЕЛКИМ ДОЖДЕМ","ГРОЗА С МЕЛКИМ ДОЖДЕМ","ГРОЗА С СИЛЬНЫМ ДОЖДЕМ","МЕЛКИЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","ДОЖДЬ И МОРОСЬ","ДОЖДЬ С ДОЖДЕМ"," НЕБОЛЬШОЙ ДОЖДЬ","УМЕРЕННЫЙ ДОЖДЬ","СИЛЬНЫЙ ДОЖДЬ","ОЧЕНЬ СИЛЬНЫЙ ДОЖДЬ","ЭКСТРЕМАЛЬНЫЙ ДОЖДЬ","ЛЕДЯНОЙ ДОЖДЬ","ЛИВЕНЬ С ИНТЕНСИВНЫМ ЛИВНЕМ","ЛИВЕНЬ С ИНТЕНСИВНЫМ ЛИВНЕМ","ДОЖДЬ С ИНТЕНСИВНЫМ ЛИВНЕМ","РВАНЫЙ ЛИВЕНЬ","ЛЕГКИЙ СНЕГ","СНЕГ","СИЛЬНЫЙ СНЕГ","МОКРЫЙ СНЕГ","ДОЖДЬ СО СНЕГОМ","ДОЖДЬ СО СНЕГОМ","ЛЕГКИЙ ДОЖДЬ СО СНЕГОМ","ДОЖДЬ СО СНЕГОМ","ДОЖДЬ СО СНЕГОМ","СИЛЬНЫЙ ДОЖДЬ СО СНЕГОМ","ТУМАН","ДЫМ","ДЫМКА","ПЕСЧАНЫЕ ВИХРИ","ТУМАН","ПЕСОК","ПЫЛЬ","ВУЛКАНИЧЕСКИЙ ПЕПЕЛ","ШКВАЛЫ","ТОРНАДО","ЧИСТОЕ НЕБО","МАЛО ОБЛАКОВ","РАССЕЯННЫЕ ОБЛАКА","РАЗОРВАННЫЕ ОБЛАКА","ПАСМУРНЫЕ ОБЛАКА"],I=["НАВАЛЬНІЦА З ЛЁГКІМ ДАЖДЖОМ","НАВАЛЬНІЦА З ДАЖДЖОМ","НАВАЛЬНІЦА З МОЦНЫМ ДАЖДЖОМ","ЛЁГКАЯ НАВАЛЬНІЦА","НАВАЛЬНІЦА","МОЦНАЯ НАВАЛЬНІЦА","ІРВАНАЯ НАВАЛЬНІЦА","НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ","НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ","НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ","НАВАЛЬНІЦА З МОЦНЫМ ДАЖДЖОМ","ДРОБНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","ДОЖДЖ І ІМЖА","ДОЖДЖ З ДАЖДЖОМ","НЕВЯЛІКІ ДОЖДЖ"," ЎМЕРАНЫ ДОЖДЖ","МОЦНЫ ДОЖДЖ","ВЕЛЬМІ МОЦНЫ ДОЖДЖ","ЭКСТРЭМАЛЬНЫ ДОЖДЖ","ЛЕДЗЯНЫ ДОЖДЖ","ЛІВЕНЬ З ІНТЭНСІЎНЫМ ЛІЎНЕМ","ЛІВЕНЬ З ІНТЭНСІЎНЫМ ЛІЎНЕМ","ДОЖДЖ З ІНТЭНСІЎНЫМ ЛІЎНЕМ","ІРВАНЫ ЛІВЕНЬ","ЛЁГКІ СНЕГ","СНЕГ","МОЦНЫ СНЕГ","МОКРЫ СНЕГ","ДОЖДЖ СА СНЕГАМ","ДОЖДЖ СА СНЕГАМ","ЛЁГКІ ДОЖДЖ СА СНЕГАМ","ДОЖДЖ СА СНЕГАМ","ДОЖДЖ СА СНЕГАМ","МОЦНЫ ДОЖДЖ СА СНЕГАМ","ТУМАН","ДЫМ","СМУГА","ПЯСЧАНЫЯ ВІХУРЫ","ТУМАН","ПЯСОК","ПЫЛ","ВУЛКАНІЧНЫ ПОПЕЛ","ШКВАЛЫ","ТАРНАДА","ЧЫСТАЕ НЕБА","МАЛА АБЛОКАЎ","РАССЕЯНЫЯ АБЛОКІ","РАЗАРВАНЫЯ АБЛОКІ","ПАХМУРНЫЯ АБЛОКІ"];window.onload=async function(){let e,t;e=null!==localStorage.getItem("language")?localStorage.getItem("language"):"en",t=null!==localStorage.getItem("degreesFormat")?localStorage.getItem("degreesFormat"):"celsius";document.querySelector(".content-wrapper").insertAdjacentHTML("afterbegin",'<div class="control-block">\n    <div class="control-block_buttons">\n      <img id="refresh-bg" src="assets/Refresh_BG.png" width="45" height="45">\n      <select class="control-block_languages">\n        <option value="en">EN</option>\n        <option value="ru">RU</option>\n        <option value="be">BE</option>\n      </select>\n      <div class="control-block_choose-degrees">\n        <div class="labels-for-degrees-inputs">\n          <input id="celsius" type="radio" name="degrees" value="c" checked>\n          <label for="celsius">\n            <div class="celsius">\n              <p>°C</p>\n            </div>\n          </label>\n          <input id="fahrenheit" type="radio" name="degrees" value="f">\n          <label for="fahrenheit">\n            <div class="fahrenheit">\n              <p>°F</p>\n            </div>\n          </label>\n        </div>\n      </div>\n      <label class="change-color">\n        <input type="color" value="#ffffff">\n        <div class="circle"></div>\n      </label>\n    </div>\n    <div class="control-block_search">\n      <div class="search-input">\n        <input id="search-input" type="text">\n        <img src="assets/micrrofon.png" width="14.5" height="17" alt="micro">\n      </div>\n      <div id="search-btn" class="search-btn">\n        <p>SEARCH</p>\n      </div>\n    </div>\n  </div><div class="weather-and-map"><div class="weather-for-4-days"><div class="weather-for-today">\n          <h2></h2>\n          <h4></h4>\n          <div class="weather-for-today_weather-description-block">\n            <div class="temperature">\n              <p></p>\n              <img src="">\n            </div>\n            <div class="weather-description">\n              <div class="weather-description-params">\n                <p class="description"></p>\n                <p class="feels-like-temp"></p>\n                <p class="wind-speed"></p>\n                <p class="humidity"></p>\n              </div>\n            </div>\n          </div>\n        </div><div class="weather-for-3-days">\n      <div class="weather-for-3-days_element weather-for-3-days_element-1">\n        <p></p>\n        <div class="temperature-next-days">\n          <p></p>\n          <img src="" alt="">\n        </div>\n      </div>\n      <div class="weather-for-3-days_element weather-for-3-days_element-2">\n        <p></p>\n        <div class="temperature-next-days">\n          <p></p>\n          <img src="" alt="">\n        </div>\n      </div>\n      <div class="weather-for-3-days_element weather-for-3-days_element-3">\n        <p></p>\n        <div class="temperature-next-days">\n          <p></p>\n          <img src="" alt="">\n        </div>\n      </div>\n    </div></div><div class="map-container">\n      <div id="map"></div>\n      <p class="lon">Longitude:</p>\n      <p class="lat">Latitude:</p>\n    </div></div>');const n=document.getElementById("refresh-bg"),a=document.querySelector(".weather-for-today h2"),i=document.querySelector(".weather-for-today h4"),r=document.querySelector(".temperature p"),c=document.querySelector(".temperature img"),u=document.querySelector(".description"),w=document.querySelector('input[type="color"]'),R=document.querySelector(".feels-like-temp"),A=document.querySelector(".wind-speed"),M=document.getElementById("celsius"),b=document.querySelector(".humidity"),N=document.getElementById("search-input"),v=document.getElementById("search-btn"),C=document.querySelector("select");let L,H,D,$,G,O,x,[B,P]=await g(await l());C.value=e;let W=await h();const k=()=>{for(let n=1;n<=3;n+=1){const a=document.querySelector(`.weather-for-3-days_element-${n}`);a.firstElementChild.innerText=s(n,e),a.lastElementChild.firstElementChild.innerText="celsius"===t?`${W[n][0]}°`:`${Math.round(1.8*W[n][0]+32)}°`,a.lastElementChild.lastElementChild.setAttribute("src",`http://openweathermap.org/img/wn/${W[n][1]}@2x.png`)}};let U;T("Minsk, Belarus","ru"),k();const Z=async e=>{U=await async function(...e){let t;const n=`https://api.openweathermap.org/data/2.5/forecast?q=${t=e.length?e[0]:await l()}&units=metric&APPID=332b80fd8cd78e930da57a87c99f70ec`,a=await fetch(n).then(e=>e.json()),i=a.list[0].main.temp,{humidity:r}=a.list[0].main,o=a.list[0].wind.speed,s=i-.4*(i-10)*(1-r/100);return[a.list[0].weather[0].description,Math.round(s),Math.round(o),r]}(e),u.innerText=U[0],R.innerText="celsius"===t?`${L}: ${U[1]}°`:`${L}: ${Math.round(1.8*U[1]+32)}°`,A.innerText=`${H}: ${U[2]} ${G}`,b.innerText=`${D}: ${U[3]}%`};await Z(await d());let F=await d(),q=F[0];const K=async()=>{let t;switch(e){case"en":L="Feels like",H="Wind",D="Humidity",$="Search",G="m/s",O="Longitude",x="Latitude",t=U[0];break;case"ru":L="Чувствуется как",H="Ветер",D="Влажность",$="Найти",G="м/с",O="Долгота",x="Широта",t=E[f.indexOf(U[0].toUpperCase())];break;case"be":L="Адчуваецаа як",H="Вецер",D="Вільготнасць",$="Знайсці",G="м/с",O="Даўгата",x="Шырата",t=I[f.indexOf(U[0].toUpperCase())];break;default:throw new Error("Incorrect language")}a.innerText=await T(a.innerText,e),document.querySelector("#search-btn p").innerText=$,u.innerText=t,R.innerText=`${L}: ${U[1]}°`,A.innerText=`${H}: ${U[2]} ${G}`,b.innerText=`${D}: ${U[3]}%`;for(let t=1;t<=3;t+=1){document.querySelector(`.weather-for-3-days_element-${t}`).firstElementChild.innerText=s(t,e)}document.querySelector(".lon").innerText=`${O}: ${p(B)}`,document.querySelector(".lat").innerText=`${x}: ${p(P)}`,i.innerText=await o(e,q)};let V=F[1];i.innerText=await o(e),a.innerText=`${q}, ${y[V]}`,K(),"celsius"===t?(r.innerText=`${W[0][0]}°`,M.setAttribute("checked",!0)):(r.innerText=`${Math.round(1.8*W[0][0]+32)}°`,document.getElementById("fahrenheit").setAttribute("checked",!0)),c.setAttribute("src",`http://openweathermap.org/img/wn/${W[0][1]}@2x.png`),setInterval(async()=>{i.innerText=await o(e,q)},6e4),S(),document.querySelector(".lon").innerText=`${O}: ${p(B)}`,document.querySelector(".lat").innerText=`${x}: ${p(P)}`,v.addEventListener("click",async()=>{-1!==await g(N.value)?([B,P]=await g(N.value),N.value="",S(B,P),document.querySelector(".lon").innerText=`${O}: ${p(B)}`,document.querySelector(".lat").innerText=`${x}: ${p(P)}`,F=await d(B,P),q=F[0],V=F[1],i.innerText=await o(e,q),m(q),W=await h(q),a.innerText=`${q}, ${y[V]}`,r.innerText="celsius"===t?`${W[0][0]}°`:`${Math.round(1.8*W[0][0]+32)}°`,c.setAttribute("src",`http://openweathermap.org/img/wn/${W[0][1]}@2x.png`),await Z(q),k(),K()):N.value="en"===e?"Incorrect city name":"ru"===e?"Неправильное название города":"Няправільная назва горада"}),document.querySelectorAll('input[name="degrees"]').forEach(e=>{e.addEventListener("change",()=>{if(M.checked){t="celsius",r.innerText=`${Math.round(5/9*(r.innerText.substr(0,r.innerText.length-1)-32))}°`;for(let e=1;e<=3;e+=1){const t=document.querySelector(`.weather-for-3-days_element-${e}`);t.lastElementChild.firstElementChild.innerText=`${Math.round(5/9*(t.lastElementChild.firstElementChild.innerText.substr(0,t.lastElementChild.firstElementChild.innerText.length-1)-32))}°`}R.innerText=`${L}: ${U[1]}°`}else{t="fahrenheit",r.innerText=`${Math.round(1.8*r.innerText.substr(0,r.innerText.length-1)+32)}°`;for(let e=1;e<=3;e+=1){const t=document.querySelector(`.weather-for-3-days_element-${e}`);t.lastElementChild.firstElementChild.innerText=`${Math.round(1.8*t.lastElementChild.firstElementChild.innerText.substr(0,t.lastElementChild.firstElementChild.innerText.length-1)+32)}°`}R.innerText=`${L}: ${Math.round(1.8*U[1]+32)}°`}})}),C.addEventListener("change",()=>{e=C.value,K()}),n.addEventListener("click",()=>{m(q)}),w.addEventListener("change",()=>{document.querySelector("body").setAttribute("style",`color:${w.value} !important`),C.style.color=w.value,N.style.color=w.value}),window.addEventListener("beforeunload",()=>{localStorage.setItem("degreesFormat",t),localStorage.setItem("language",e)})};n(0)}]);