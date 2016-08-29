"use strict";
var __cov_6LVspDKHa66fuwrXaLTyzw = (Function('return this'))();
if (!__cov_6LVspDKHa66fuwrXaLTyzw.$$cov_1472469279361$$) { __cov_6LVspDKHa66fuwrXaLTyzw.$$cov_1472469279361$$ = {}; }
__cov_6LVspDKHa66fuwrXaLTyzw = __cov_6LVspDKHa66fuwrXaLTyzw.$$cov_1472469279361$$;
if (!(__cov_6LVspDKHa66fuwrXaLTyzw['build/src/ModelHelper.js'])) {
   __cov_6LVspDKHa66fuwrXaLTyzw['build/src/ModelHelper.js'] = {"path":"build/src/ModelHelper.js","s":{"1":0,"2":1,"3":0,"4":0,"5":0,"6":1,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":1,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":1,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":1,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"typeCast","line":3,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":31}}},"2":{"name":"Get","line":9,"loc":{"start":{"line":9,"column":0},"end":{"line":9,"column":24}}},"3":{"name":"Create","line":31,"loc":{"start":{"line":31,"column":0},"end":{"line":31,"column":31}}},"4":{"name":"Remove","line":52,"loc":{"start":{"line":52,"column":0},"end":{"line":52,"column":27}}},"5":{"name":"Update","line":69,"loc":{"start":{"line":69,"column":0},"end":{"line":69,"column":26}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":29}},"2":{"start":{"line":3,"column":0},"end":{"line":8,"column":1}},"3":{"start":{"line":4,"column":4},"end":{"line":6,"column":5}},"4":{"start":{"line":5,"column":8},"end":{"line":5,"column":40}},"5":{"start":{"line":7,"column":4},"end":{"line":7,"column":18}},"6":{"start":{"line":9,"column":0},"end":{"line":29,"column":1}},"7":{"start":{"line":10,"column":4},"end":{"line":28,"column":7}},"8":{"start":{"line":11,"column":8},"end":{"line":11,"column":43}},"9":{"start":{"line":12,"column":8},"end":{"line":27,"column":11}},"10":{"start":{"line":13,"column":12},"end":{"line":14,"column":35}},"11":{"start":{"line":14,"column":16},"end":{"line":14,"column":35}},"12":{"start":{"line":15,"column":12},"end":{"line":26,"column":15}},"13":{"start":{"line":19,"column":16},"end":{"line":24,"column":34}},"14":{"start":{"line":20,"column":20},"end":{"line":20,"column":32}},"15":{"start":{"line":21,"column":21},"end":{"line":24,"column":34}},"16":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}},"17":{"start":{"line":24,"column":20},"end":{"line":24,"column":34}},"18":{"start":{"line":25,"column":16},"end":{"line":25,"column":27}},"19":{"start":{"line":30,"column":0},"end":{"line":30,"column":18}},"20":{"start":{"line":31,"column":0},"end":{"line":50,"column":1}},"21":{"start":{"line":32,"column":4},"end":{"line":33,"column":28}},"22":{"start":{"line":33,"column":8},"end":{"line":33,"column":28}},"23":{"start":{"line":34,"column":4},"end":{"line":49,"column":7}},"24":{"start":{"line":35,"column":8},"end":{"line":35,"column":43}},"25":{"start":{"line":36,"column":8},"end":{"line":48,"column":11}},"26":{"start":{"line":37,"column":12},"end":{"line":38,"column":35}},"27":{"start":{"line":38,"column":16},"end":{"line":38,"column":35}},"28":{"start":{"line":39,"column":12},"end":{"line":47,"column":15}},"29":{"start":{"line":40,"column":16},"end":{"line":45,"column":33}},"30":{"start":{"line":41,"column":20},"end":{"line":41,"column":32}},"31":{"start":{"line":42,"column":21},"end":{"line":45,"column":33}},"32":{"start":{"line":43,"column":20},"end":{"line":43,"column":70}},"33":{"start":{"line":45,"column":20},"end":{"line":45,"column":33}},"34":{"start":{"line":46,"column":16},"end":{"line":46,"column":27}},"35":{"start":{"line":51,"column":0},"end":{"line":51,"column":24}},"36":{"start":{"line":52,"column":0},"end":{"line":67,"column":1}},"37":{"start":{"line":53,"column":4},"end":{"line":66,"column":7}},"38":{"start":{"line":54,"column":8},"end":{"line":54,"column":43}},"39":{"start":{"line":55,"column":8},"end":{"line":65,"column":11}},"40":{"start":{"line":56,"column":12},"end":{"line":57,"column":35}},"41":{"start":{"line":57,"column":16},"end":{"line":57,"column":35}},"42":{"start":{"line":58,"column":12},"end":{"line":64,"column":15}},"43":{"start":{"line":59,"column":16},"end":{"line":62,"column":53}},"44":{"start":{"line":60,"column":20},"end":{"line":60,"column":32}},"45":{"start":{"line":62,"column":20},"end":{"line":62,"column":53}},"46":{"start":{"line":63,"column":16},"end":{"line":63,"column":27}},"47":{"start":{"line":68,"column":0},"end":{"line":68,"column":24}},"48":{"start":{"line":69,"column":0},"end":{"line":86,"column":1}},"49":{"start":{"line":70,"column":4},"end":{"line":70,"column":49}},"50":{"start":{"line":71,"column":4},"end":{"line":71,"column":21}},"51":{"start":{"line":72,"column":4},"end":{"line":85,"column":7}},"52":{"start":{"line":73,"column":8},"end":{"line":73,"column":43}},"53":{"start":{"line":74,"column":8},"end":{"line":84,"column":11}},"54":{"start":{"line":75,"column":12},"end":{"line":76,"column":35}},"55":{"start":{"line":76,"column":16},"end":{"line":76,"column":35}},"56":{"start":{"line":77,"column":12},"end":{"line":83,"column":15}},"57":{"start":{"line":78,"column":16},"end":{"line":81,"column":57}},"58":{"start":{"line":79,"column":20},"end":{"line":79,"column":32}},"59":{"start":{"line":81,"column":20},"end":{"line":81,"column":57}},"60":{"start":{"line":82,"column":16},"end":{"line":82,"column":27}},"61":{"start":{"line":87,"column":0},"end":{"line":87,"column":24}}},"branchMap":{"1":{"line":4,"type":"if","locations":[{"start":{"line":4,"column":4},"end":{"line":4,"column":4}},{"start":{"line":4,"column":4},"end":{"line":4,"column":4}}]},"2":{"line":4,"type":"binary-expr","locations":[{"start":{"line":4,"column":8},"end":{"line":4,"column":29}},{"start":{"line":4,"column":33},"end":{"line":4,"column":51}}]},"3":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":12},"end":{"line":13,"column":12}},{"start":{"line":13,"column":12},"end":{"line":13,"column":12}}]},"4":{"line":19,"type":"if","locations":[{"start":{"line":19,"column":16},"end":{"line":19,"column":16}},{"start":{"line":19,"column":16},"end":{"line":19,"column":16}}]},"5":{"line":21,"type":"if","locations":[{"start":{"line":21,"column":21},"end":{"line":21,"column":21}},{"start":{"line":21,"column":21},"end":{"line":21,"column":21}}]},"6":{"line":21,"type":"binary-expr","locations":[{"start":{"line":21,"column":25},"end":{"line":21,"column":28}},{"start":{"line":21,"column":32},"end":{"line":21,"column":48}}]},"7":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":4},"end":{"line":32,"column":4}},{"start":{"line":32,"column":4},"end":{"line":32,"column":4}}]},"8":{"line":37,"type":"if","locations":[{"start":{"line":37,"column":12},"end":{"line":37,"column":12}},{"start":{"line":37,"column":12},"end":{"line":37,"column":12}}]},"9":{"line":40,"type":"if","locations":[{"start":{"line":40,"column":16},"end":{"line":40,"column":16}},{"start":{"line":40,"column":16},"end":{"line":40,"column":16}}]},"10":{"line":42,"type":"if","locations":[{"start":{"line":42,"column":21},"end":{"line":42,"column":21}},{"start":{"line":42,"column":21},"end":{"line":42,"column":21}}]},"11":{"line":56,"type":"if","locations":[{"start":{"line":56,"column":12},"end":{"line":56,"column":12}},{"start":{"line":56,"column":12},"end":{"line":56,"column":12}}]},"12":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":16},"end":{"line":59,"column":16}},{"start":{"line":59,"column":16},"end":{"line":59,"column":16}}]},"13":{"line":75,"type":"if","locations":[{"start":{"line":75,"column":12},"end":{"line":75,"column":12}},{"start":{"line":75,"column":12},"end":{"line":75,"column":12}}]},"14":{"line":78,"type":"if","locations":[{"start":{"line":78,"column":16},"end":{"line":78,"column":16}},{"start":{"line":78,"column":16},"end":{"line":78,"column":16}}]}}};
}
__cov_6LVspDKHa66fuwrXaLTyzw = __cov_6LVspDKHa66fuwrXaLTyzw['build/src/ModelHelper.js'];
__cov_6LVspDKHa66fuwrXaLTyzw.s['1']++;
const DB_1 = require('./DB');
function typeCast(field, next) {
    __cov_6LVspDKHa66fuwrXaLTyzw.f['1']++;
    __cov_6LVspDKHa66fuwrXaLTyzw.s['3']++;
    if ((__cov_6LVspDKHa66fuwrXaLTyzw.b['2'][0]++, field.type === 'TINY') && (__cov_6LVspDKHa66fuwrXaLTyzw.b['2'][1]++, field.length === 1)) {
        __cov_6LVspDKHa66fuwrXaLTyzw.b['1'][0]++;
        __cov_6LVspDKHa66fuwrXaLTyzw.s['4']++;
        return field.string() === '1';
    } else {
        __cov_6LVspDKHa66fuwrXaLTyzw.b['1'][1]++;
    }
    __cov_6LVspDKHa66fuwrXaLTyzw.s['5']++;
    return next();
}
function Get(table, id) {
    __cov_6LVspDKHa66fuwrXaLTyzw.f['2']++;
    __cov_6LVspDKHa66fuwrXaLTyzw.s['7']++;
    return new Promise((resolve, reject) => {
        __cov_6LVspDKHa66fuwrXaLTyzw.s['8']++;
        let conn = DB_1.createConnection();
        __cov_6LVspDKHa66fuwrXaLTyzw.s['9']++;
        conn.connect(err => {
            __cov_6LVspDKHa66fuwrXaLTyzw.s['10']++;
            if (err) {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['3'][0]++;
                __cov_6LVspDKHa66fuwrXaLTyzw.s['11']++;
                return reject(err);
            } else {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['3'][1]++;
            }
            __cov_6LVspDKHa66fuwrXaLTyzw.s['12']++;
            conn.query({
                sql: 'SELECT * FROM `' + table + '` WHERE `id` = ? LIMIT 1',
                typeCast: typeCast
            }, [id], (err, res) => {
                __cov_6LVspDKHa66fuwrXaLTyzw.s['13']++;
                if (err) {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['4'][0]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['14']++;
                    reject(err);
                } else {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['4'][1]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['15']++;
                    if ((__cov_6LVspDKHa66fuwrXaLTyzw.b['6'][0]++, res) && (__cov_6LVspDKHa66fuwrXaLTyzw.b['6'][1]++, res.length === 1)) {
                        __cov_6LVspDKHa66fuwrXaLTyzw.b['5'][0]++;
                        __cov_6LVspDKHa66fuwrXaLTyzw.s['16']++;
                        resolve(res[0]);
                    } else {
                        __cov_6LVspDKHa66fuwrXaLTyzw.b['5'][1]++;
                        __cov_6LVspDKHa66fuwrXaLTyzw.s['17']++;
                        resolve(null);
                    }
                }
                __cov_6LVspDKHa66fuwrXaLTyzw.s['18']++;
                conn.end();
            });
        });
    });
}
__cov_6LVspDKHa66fuwrXaLTyzw.s['19']++;
exports.Get = Get;
function Create(table, params) {
    __cov_6LVspDKHa66fuwrXaLTyzw.f['3']++;
    __cov_6LVspDKHa66fuwrXaLTyzw.s['21']++;
    if (params.hasOwnProperty('id')) {
        __cov_6LVspDKHa66fuwrXaLTyzw.b['7'][0]++;
        __cov_6LVspDKHa66fuwrXaLTyzw.s['22']++;
        delete params['id'];
    } else {
        __cov_6LVspDKHa66fuwrXaLTyzw.b['7'][1]++;
    }
    __cov_6LVspDKHa66fuwrXaLTyzw.s['23']++;
    return new Promise((resolve, reject) => {
        __cov_6LVspDKHa66fuwrXaLTyzw.s['24']++;
        let conn = DB_1.createConnection();
        __cov_6LVspDKHa66fuwrXaLTyzw.s['25']++;
        conn.connect(err => {
            __cov_6LVspDKHa66fuwrXaLTyzw.s['26']++;
            if (err) {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['8'][0]++;
                __cov_6LVspDKHa66fuwrXaLTyzw.s['27']++;
                return reject(err);
            } else {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['8'][1]++;
            }
            __cov_6LVspDKHa66fuwrXaLTyzw.s['28']++;
            conn.query('INSERT INTO `' + table + '` SET ?', params, (err, result) => {
                __cov_6LVspDKHa66fuwrXaLTyzw.s['29']++;
                if (err) {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['9'][0]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['30']++;
                    reject(err);
                } else {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['9'][1]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['31']++;
                    if (result.insertId) {
                        __cov_6LVspDKHa66fuwrXaLTyzw.b['10'][0]++;
                        __cov_6LVspDKHa66fuwrXaLTyzw.s['32']++;
                        Get(table, result.insertId).then(resolve, reject);
                    } else {
                        __cov_6LVspDKHa66fuwrXaLTyzw.b['10'][1]++;
                        __cov_6LVspDKHa66fuwrXaLTyzw.s['33']++;
                        reject(null);
                    }
                }
                __cov_6LVspDKHa66fuwrXaLTyzw.s['34']++;
                conn.end();
            });
        });
    });
}
__cov_6LVspDKHa66fuwrXaLTyzw.s['35']++;
exports.Create = Create;
function Remove(table, id) {
    __cov_6LVspDKHa66fuwrXaLTyzw.f['4']++;
    __cov_6LVspDKHa66fuwrXaLTyzw.s['37']++;
    return new Promise((resolve, reject) => {
        __cov_6LVspDKHa66fuwrXaLTyzw.s['38']++;
        let conn = DB_1.createConnection();
        __cov_6LVspDKHa66fuwrXaLTyzw.s['39']++;
        conn.connect(err => {
            __cov_6LVspDKHa66fuwrXaLTyzw.s['40']++;
            if (err) {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['11'][0]++;
                __cov_6LVspDKHa66fuwrXaLTyzw.s['41']++;
                return reject(err);
            } else {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['11'][1]++;
            }
            __cov_6LVspDKHa66fuwrXaLTyzw.s['42']++;
            conn.query('DELETE FROM `' + table + '` WHERE `id` = ?', [id], (err, result) => {
                __cov_6LVspDKHa66fuwrXaLTyzw.s['43']++;
                if (err) {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['12'][0]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['44']++;
                    reject(err);
                } else {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['12'][1]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['45']++;
                    resolve(result.affectedRows > 0);
                }
                __cov_6LVspDKHa66fuwrXaLTyzw.s['46']++;
                conn.end();
            });
        });
    });
}
__cov_6LVspDKHa66fuwrXaLTyzw.s['47']++;
exports.Remove = Remove;
function Update(table, o) {
    __cov_6LVspDKHa66fuwrXaLTyzw.f['5']++;
    __cov_6LVspDKHa66fuwrXaLTyzw.s['49']++;
    let obj = Object.assign({}, o), id = o['id'];
    __cov_6LVspDKHa66fuwrXaLTyzw.s['50']++;
    delete obj['id'];
    __cov_6LVspDKHa66fuwrXaLTyzw.s['51']++;
    return new Promise((resolve, reject) => {
        __cov_6LVspDKHa66fuwrXaLTyzw.s['52']++;
        let conn = DB_1.createConnection();
        __cov_6LVspDKHa66fuwrXaLTyzw.s['53']++;
        conn.connect(err => {
            __cov_6LVspDKHa66fuwrXaLTyzw.s['54']++;
            if (err) {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['13'][0]++;
                __cov_6LVspDKHa66fuwrXaLTyzw.s['55']++;
                return reject(err);
            } else {
                __cov_6LVspDKHa66fuwrXaLTyzw.b['13'][1]++;
            }
            __cov_6LVspDKHa66fuwrXaLTyzw.s['56']++;
            conn.query('UPDATE `' + table + '` SET ? WHERE `id` = ?', [
                obj,
                id
            ], (err, result) => {
                __cov_6LVspDKHa66fuwrXaLTyzw.s['57']++;
                if (err) {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['14'][0]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['58']++;
                    reject(err);
                } else {
                    __cov_6LVspDKHa66fuwrXaLTyzw.b['14'][1]++;
                    __cov_6LVspDKHa66fuwrXaLTyzw.s['59']++;
                    Get(table, id).then(resolve, reject);
                }
                __cov_6LVspDKHa66fuwrXaLTyzw.s['60']++;
                conn.end();
            });
        });
    });
}
__cov_6LVspDKHa66fuwrXaLTyzw.s['61']++;
exports.Update = Update;

//# sourceMappingURL=ModelHelper.js.map
