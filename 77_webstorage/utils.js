
// Utils v=1593034470004

/**
 * Update the data of obj1 with those of obj2 
 * (or add them if they do not exist)
 * Similar to Object.assign(obj1,obj2)
 * @param {object} obj1
 * @param {object} obj2
 */
function mergeObject(obj1,obj2){
    for(var i in obj2){
        if(typeof obj2[i] !== "object")
        	obj1[i] = obj2[i];
        else{
            if(typeof obj1[i] === "undefined")
            	obj1[i] = obj2[i];
            else    
                mergeObject(obj1[i],obj2[i]);
        }
    }
}

/**
 * Update object with up
 * @param {object} up
 */
Object.prototype.update = function(up){
    for(var i in up)
        (typeof up[i] !== "object")
            ? this[i] = up[i]
            : (typeof this[i] === "undefined")
                ? this[i] = up[i]
                : this[i].update(up[i]);
}

/**
 * String treatment: first letter in capital letters
 */
String.prototype.sentence = function() {
	if(this)
		return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
	return "";
}

/**
 * String treatment: every first letter in capital letters
 * https://es.stackoverflow.com/questions/111241
 */
String.prototype.capitalice = function() {
	if(this)
		return (this.toLowerCase()).replace(
            /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])([a-záéíóúüñ])/g, function(
                match, caracterPrevio, minuscula) {
			return caracterPrevio + minuscula.toLocaleUpperCase(['es', 'gl', 'ca', 'pt', 'en']);
		});
	return "";
}

/**
 * Get a nested object property value
 * Checks for a nested object property and returns its value.
 * http://www.etnassoft.com/2017/03/13/snippet-accediendo-de-forma-elegante-a-una-propiedad-profunda-en-un-objeto-javascript
 * @param   {object}    obj     An object given
 * @param   {string}    key     The needed key
 * @return  {string}            The value of that key.  
 */
var getProp = function (obj, key) {
    return key.split('.').reduce( function (o, x) {
        return (typeof o == "undefined" || o === null) ? o : o[x];
    }, obj);
};

/**
 * Set a nested object property value 
 * Checks for a nested object property, saves the value and returns it
 * @param   {object}      obj     An object given
 * @param   {string}      key     The needed key
 * @param   {any}         value   The value to be saved
 * @return  {boolean}             Result of the operation
 */
function setProp(obj, key, value) {
    return !!(key.split('.').reduce(
        function (o, x, i, a) {
            if (typeof o == "undefined" || o === null)
                return o;
            if (a.length - 1 == i && o.hasOwnProperty(x))
                return (o[x] = value);
            return o[x];
        }, obj));
};

/**
 * Check that item is a JSON
 * @param   {string}    item
 * @return  {boolean}
 */
function isJSON(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    return (typeof item === "object" && item !== null);
}

/**
 * Enable or disable vertical page scroll
 * @param   {string}    todo    'add', 'remove' or null
 */
function toggleScrollY(todo) {
    var scroll = todo || "",
        style = document.documentElement.style;
	switch (scroll.toLowerCase()) {
	case 'add': style.overflowY="auto"; break;
	case 'remove': style.overflowY="hidden"; break;
	default:
        (style.overflowY.toLowerCase() == "hidden")
         ? style.overflowY="auto"
		 : style.overflowY="hidden";
		break;
	}
}

/**
 * When the string to be encoded contains characters outside of the Latin1 range
 * https://developer.mozilla.org/es/docs/Web/API/WindowBase64/Base64_codificando_y_decodificando
 * @param   {string}    str
 * @return  {string}
 */
function utf8_to_b64( str ) {
    return window.btoa(encodeURIComponent( str ));
}
function b64_to_utf8( str ) {
    return decodeURIComponent(window.atob( str ));
}

/**
 * Download file without server
 * https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
 * @param   {string}    filename
 * @param   {string}    text
 */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

/**
 * Get the UTC date in the Locale String Format
 * https://stackoverflow.com/questions/55427168/is-there-a-function-to-get-the-utc-date-in-the-locale-string-format
 * @param   {string}    locales
 * @param   {object}    options
 */
Date.prototype.toLocaleUTCDateString = function ( locales, options) {
    var timeDiff = seconDiff = adjustedDate = 0;
    if( !!(this.getSeconds() - this.getUTCSeconds()) )
        seconDiff = ( 60 - ( this.getSeconds() - this.getUTCSeconds() ) ) * 1000;

    timeDiff = this.getTimezoneOffset() * 60000;
    adjustedDate = new Date(this.valueOf() + timeDiff + seconDiff);
    return adjustedDate.toLocaleDateString(locales, options);
}

/**
 * Remove item from array (mutable)
 * https://www.etnassoft.com/2016/09/09/eliminar-un-elemento-de-un-array-en-javascript-metodos-mutables-e-inmutables
 */
Array.prototype.removeItemMutable = function(item) {
    var i = this.indexOf( item );
    return !!(i !== -1 && this.splice( i, 1 ));
}

/**
 * Remove item from array (immutable)
 * https://www.etnassoft.com/2016/09/09/eliminar-un-elemento-de-un-array-en-javascript-metodos-mutables-e-inmutables
 */
Array.prototype.removeItemImmutable = function(item) {
    return this.filter( e => e !== item );
}