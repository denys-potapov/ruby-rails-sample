const { funEval } = require('top.js');

// trace ends here, wo we report it now
funEval(unknown);

// and this will be reported last
function nextInChain(arg1, arg2) {
  funEval(arg2);
}

// edge case we should stop
// if there is a recursion somwhere
function recursiveChainA(arg1) {
  funEval(arg1);
  recursiveChainB(arg1);
}

function recursiveChainB(arg1) {
  recursiveChainA(arg1);
}
