var makeNm = function() {
    var res = [];
    var first = Math.round(Math.random()*9);
    res.push(first);
    if (Math.round(Math.random()*10) > 4) {
        res.push('+');
        res.push(Math.round(Math.random()*(10-first)));
    }
    else {
        res.push('-');
        res.push(Math.round(Math.random()*(first)));
    }

    return res;
}