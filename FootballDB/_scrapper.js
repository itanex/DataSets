function scrapFootballDb() {
    var elems = document.querySelectorAll('#leftcol > div.table-responsive > table tbody tr');
    var fields = ['number', 'playerName', 'position', 'g', 'gs', 'birthday', 'college'];
    var values = Array.prototype.map.call(elems, function (obj, index) {

        return '{' + Array.prototype.map.call(obj.children, function (child, index) {
            return `"${fields[index]}":"${child.innerText.trim()}"`;
        }).join(',') + '}';

    });

    console.log('[' + values.join(',') + ']');
}
