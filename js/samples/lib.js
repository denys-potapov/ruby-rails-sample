
function first(arg, unused) {
    eval(arg);
}

function sameFileCall(other) {
    first(other, 1);
}