"use strict";
var __cov_riwRzYNGQL6aEr7AhzuRtg = (Function('return this'))();
if (!__cov_riwRzYNGQL6aEr7AhzuRtg.$$cov_1472469279361$$) { __cov_riwRzYNGQL6aEr7AhzuRtg.$$cov_1472469279361$$ = {}; }
__cov_riwRzYNGQL6aEr7AhzuRtg = __cov_riwRzYNGQL6aEr7AhzuRtg.$$cov_1472469279361$$;
if (!(__cov_riwRzYNGQL6aEr7AhzuRtg['build/src/Todo.js'])) {
   __cov_riwRzYNGQL6aEr7AhzuRtg['build/src/Todo.js'] = {"path":"build/src/Todo.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":1,"7":0,"8":0,"9":1,"10":0,"11":0,"12":1,"13":0,"14":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"Get","line":4,"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":17}}},"2":{"name":"Create","line":8,"loc":{"start":{"line":8,"column":0},"end":{"line":8,"column":24}}},"3":{"name":"Remove","line":12,"loc":{"start":{"line":12,"column":0},"end":{"line":12,"column":20}}},"4":{"name":"Update","line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":22}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":45}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":22}},"3":{"start":{"line":4,"column":0},"end":{"line":6,"column":1}},"4":{"start":{"line":5,"column":4},"end":{"line":5,"column":38}},"5":{"start":{"line":7,"column":0},"end":{"line":7,"column":18}},"6":{"start":{"line":8,"column":0},"end":{"line":10,"column":1}},"7":{"start":{"line":9,"column":4},"end":{"line":9,"column":45}},"8":{"start":{"line":11,"column":0},"end":{"line":11,"column":24}},"9":{"start":{"line":12,"column":0},"end":{"line":14,"column":1}},"10":{"start":{"line":13,"column":4},"end":{"line":13,"column":41}},"11":{"start":{"line":15,"column":0},"end":{"line":15,"column":24}},"12":{"start":{"line":16,"column":0},"end":{"line":18,"column":1}},"13":{"start":{"line":17,"column":4},"end":{"line":17,"column":43}},"14":{"start":{"line":19,"column":0},"end":{"line":19,"column":24}}},"branchMap":{}};
}
__cov_riwRzYNGQL6aEr7AhzuRtg = __cov_riwRzYNGQL6aEr7AhzuRtg['build/src/Todo.js'];
__cov_riwRzYNGQL6aEr7AhzuRtg.s['1']++;
const modelHelper = require('./modelHelper');
__cov_riwRzYNGQL6aEr7AhzuRtg.s['2']++;
const table = 'todos';
function Get(id) {
    __cov_riwRzYNGQL6aEr7AhzuRtg.f['1']++;
    __cov_riwRzYNGQL6aEr7AhzuRtg.s['4']++;
    return modelHelper.Get(table, id);
}
__cov_riwRzYNGQL6aEr7AhzuRtg.s['5']++;
exports.Get = Get;
function Create(params) {
    __cov_riwRzYNGQL6aEr7AhzuRtg.f['2']++;
    __cov_riwRzYNGQL6aEr7AhzuRtg.s['7']++;
    return modelHelper.Create(table, params);
}
__cov_riwRzYNGQL6aEr7AhzuRtg.s['8']++;
exports.Create = Create;
function Remove(id) {
    __cov_riwRzYNGQL6aEr7AhzuRtg.f['3']++;
    __cov_riwRzYNGQL6aEr7AhzuRtg.s['10']++;
    return modelHelper.Remove(table, id);
}
__cov_riwRzYNGQL6aEr7AhzuRtg.s['11']++;
exports.Remove = Remove;
function Update(todo) {
    __cov_riwRzYNGQL6aEr7AhzuRtg.f['4']++;
    __cov_riwRzYNGQL6aEr7AhzuRtg.s['13']++;
    return modelHelper.Update(table, todo);
}
__cov_riwRzYNGQL6aEr7AhzuRtg.s['14']++;
exports.Update = Update;

//# sourceMappingURL=Todo.js.map
