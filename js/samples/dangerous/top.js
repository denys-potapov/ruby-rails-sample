// call to dangerous functions
// on top level should be reported
eval('anything');

// should be traced until top level
function funEval(arg) {
  eval(arg);
}

// this is unsused function should
// be reported on first pass
function funUnused(arg) {
  eval(arg);
}

module.exports = {
    funEval, funUnused,
};
