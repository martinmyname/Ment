function randomColor() {
    var h0 = Math.floor(Math.random()*16);
    var h1 = Math.floor(Math.random()*16);
    var h2 = Math.floor(Math.random()*16);
    var h3 = Math.floor(Math.random()*16);
    var h4 = Math.floor(Math.random()*16);
    var h5 = Math.floor(Math.random()*16);
    return '#' + h0.toString(16) + h1.toString(16) + h2.toString(16) + h3.toString(16) + h4.toString(16) + h5.toString(16);
}
