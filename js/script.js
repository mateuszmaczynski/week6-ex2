var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");
var data = document.querySelector("#data");
var text = document.querySelector("#text");
var inputAll = document.querySelectorAll('input[type="text"]');
        
but1.addEventListener("click", function(event){
            event.preventDefault();
            var dbName = inputAll[0].value;
            if (dbName !== "") {
                var db = localDB(dbName);
                console.log(db);
                window.localStorage["DB1." + dbName] = db;
            }
        });
but2.addEventListener("click", function(event){
            event.preventDefault();
            getDB();
        });
function localDB(base) {
            var base = {
                firstName: inputAll[1].value,
                lastName: inputAll[2].value,
                age: Number(inputAll[3].value)
            }
            return JSON.stringify(base);
        }
function getDB() {
            text.innerHTML= "<strong><p>Liczba rekordów w localStorage: " + window.localStorage.length + ".</p><p> Lista wszystkich obiektów JSON: </strong></p>";
            data.innerHTML = "";
            var showdata, data1;
            for (i=0; i<window.localStorage.length; i++) {
                showdata = window.localStorage.getItem(localStorage.key(i));
                try {
                    data1 = JSON.parse(showdata);
                } catch (e) {
                    continue;   
                }
                console.log(data1); 
                var li=document.createElement('li');
                data.appendChild(li);
                li.innerHTML = showdata;
            }
        }
if (typeof Storage === undefined) {
            text.innerHTML = "przeglądarka nie obsługuje localStorage";
            but1.disabled = true;
            but2.disabled = true;
        }

