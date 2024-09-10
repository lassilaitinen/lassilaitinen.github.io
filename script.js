"use strict";
console.log("script toimii");

window.addEventListener("load", function() {
    console.log("script toimii");
    last_modified();
});

function last_modified() {
    const date = new Date(document.lastModified).toLocaleString();
    document.getElementById('modified').textContent = "Viimeksi päivitetty: " +  date;
}