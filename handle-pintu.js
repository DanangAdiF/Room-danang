// INPUT TOMBOL SUKA------------------------------------------

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.sulingBambu) {
             localStorage.sulingBambu = Number(localStorage.sulingBambu)+1;
        }

        else {
            localStorage.sulingBambu = 1;
        }
        document.getElementById("result").innerHTML = localStorage.sulingBambu;
    }
};

// ------------------------------------------------------------------------------
// OUTPUT JUMLAH SUKA---------------------------------------------------------

let a = localStorage.getItem("sulingBambu")
document.getElementById("result").innerHTML = a;

// -----------------------------------------------------------