"use strict";
var __cov_Idg8NrOz9mjswOm8dkCZTA = (Function('return this'))();
if (!__cov_Idg8NrOz9mjswOm8dkCZTA.$$cov_1472469279361$$) { __cov_Idg8NrOz9mjswOm8dkCZTA.$$cov_1472469279361$$ = {}; }
__cov_Idg8NrOz9mjswOm8dkCZTA = __cov_Idg8NrOz9mjswOm8dkCZTA.$$cov_1472469279361$$;
if (!(__cov_Idg8NrOz9mjswOm8dkCZTA['build/src/DB.js'])) {
   __cov_Idg8NrOz9mjswOm8dkCZTA['build/src/DB.js'] = {"path":"build/src/DB.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"createConnection","line":4,"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":28}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":31}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":48}},"3":{"start":{"line":4,"column":0},"end":{"line":6,"column":1}},"4":{"start":{"line":5,"column":4},"end":{"line":5,"column":64}},"5":{"start":{"line":7,"column":0},"end":{"line":7,"column":44}}},"branchMap":{}};
}
__cov_Idg8NrOz9mjswOm8dkCZTA = __cov_Idg8NrOz9mjswOm8dkCZTA['build/src/DB.js'];
__cov_Idg8NrOz9mjswOm8dkCZTA.s['1']++;
const mysql = require('mysql');
__cov_Idg8NrOz9mjswOm8dkCZTA.s['2']++;
let config = require('./../../configs/db.json');
function createConnection() {
    __cov_Idg8NrOz9mjswOm8dkCZTA.f['1']++;
    __cov_Idg8NrOz9mjswOm8dkCZTA.s['4']++;
    return mysql.createConnection(config[config['defaultEnv']]);
}
__cov_Idg8NrOz9mjswOm8dkCZTA.s['5']++;
exports.createConnection = createConnection;

//# sourceMappingURL=DB.js.map
