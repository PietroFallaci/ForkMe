function printValue() {
    const width = event.target.value;
    document.getElementById("display").innerHTML = width;
    document.getElementById("box").style = `width=${width}`;
}