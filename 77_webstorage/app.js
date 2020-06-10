'use strict'
/**
 * Author: https://github.com/miggar
 * 
 *      Al iniciar
 *  • Comprobamos si hay datos ya guardados
 *  • Si no hay datos: iniciamos el indice a 0
 *  • Si hay datos: cargamos y generamos la tabla  
 * 
 *      Al dar al botón guardar
 *  • Comprobamos si los datos son correctos
 *  • Añadimos los datos a la variable actual
 *  • Aumentamos el índice
 *  • Almacenamos en localstorage
 * 
 *      Posibles cambios futurus
 *  • Evitar tanto el uso de la api (métodos no públicos)
 *  • Mejoras CSS, JS, html...
 */

var app = app || (function() {
    var firstname, lastname, birthday, submit, index, tbody,
        ddbb_name = 'data',
        data,
        api = {};

    api.init  = function() {
        console.log('%c app start ', 'background: black; color: green');
        firstname = document.querySelector('#firstname');
        lastname = document.querySelector('#lastname');
        birthday = document.querySelector('#birthday');
        submit = document.querySelector('#submit');
        index = document.querySelector('#index');
        tbody = document.querySelector('.showData tbody');
            
        submit.addEventListener('click', submitData);
        loadData();
        delete app.init;
        Object.freeze(app);
    };

    api.removeItem = function(key) {
        var opcion = confirm("¿Desea eliminar el índice " + key + "?");
        if (opcion !== true)
            return;
        delete data.people[key];
        showTable();
        saveData();
        showIndex();
    }

    api.editItem = function(key) {
        index.innerHTML = key;
        firstname.value = data.people[key].firstname;
        lastname.value = data.people[key].lastname;
        birthday.value = data.people[key].birthday;
    }

    api.export = function() {
        download('localstore.json', JSON.stringify(data,null,2));
    }

    api.import = function() {
        var el = document.querySelector("#fileElem");
        if (el)
            el.click();
    }

    api.handleFile = function(element) {
        var file = element.files[0];
        element.value = "";
        if( file.type !== "application/json")
            return alert('No es un archivo JSON válido');
        var opcion = confirm("Al aceptar se sobrescribirán los datos de la aplicación");
        if (opcion !== true)
            return;
        
        var reader = new FileReader();
        reader.onload = function(e) {
            data = JSON.parse(decodeURIComponent(e.target.result));
            showTable();
            saveData();
            showIndex();
        };
        reader.readAsText(file);
    }

    function submitData() {
        if(!firstname.value.length)
            return;
        data.people[index.innerHTML] = {};
        data.people[index.innerHTML].firstname = firstname.value.trim();
        data.people[index.innerHTML].lastname = lastname.value.trim();
        data.people[index.innerHTML].birthday = birthday.value;
        if( index.innerHTML == data.index)
            ++data.index;
        showTable();
        saveData();
        showIndex();
    }
    function saveData() {
        localStorage.setItem(
            ddbb_name, utf8_to_b64(
                JSON.stringify(data)
        ));
        firstname.value = lastname.value = birthday.value = "";
    }

    function loadData() {
        if(!!(data = localStorage.getItem(ddbb_name))){
            try {
                data = b64_to_utf8(data); 
                if( !isJSON(data) )
                    throw "the data is not a JSON";
                data = JSON.parse(data);
                if( !getProp(data, 'index') || 
                    !getProp(data, 'people') ||
                    isNaN(data.index) ||
                    (typeof data.people !== "object"))
                    throw "format error";
                showTable();
                showIndex();
            } catch (error) {
                console.error(error);
                initData();
            }
        } else
            initData();
    }

    function initData() {
        localStorage.clear();
        data = { index:0, people: {} };
        showIndex();
    }

    function showTable() {
        var template = "";

        tbody.innerHTML = "";

        for (var key in data.people) {
            if (data.people.hasOwnProperty(key))
                template += getRow(
                    key,
                    data.people[key].firstname,
                    data.people[key].lastname || "",
                    data.people[key].birthday || ""); 
        }

        tbody.innerHTML = template;
    }

    function getRow(index, firstname, lastname, birthday) {
        if(!!birthday)
            birthday = new Date(birthday).toLocaleUTCDateString("es-ES", {day: "2-digit", month: "2-digit", year: "numeric" });
        return '<tr>\
                <td>\
                <button onclick="app.removeItem('+ index +')" title="delete"><i class="material-icons">&#xe872;</i></button>\
                <button onclick="app.editItem('+ index +')" title="edit"><i class="material-icons">&#xe150;</i></button></td>\
                <td class="text-right">' + index + '</td>\
                <td>' + firstname +'</td>\
                <td>' + lastname + '</td>\
                <td class="text-right">' + birthday +'</td>\
                </tr>'
    }

    function showIndex(){
        index.innerHTML = data.index;
    }

    return api;
})();

document.addEventListener("DOMContentLoaded", app.init);