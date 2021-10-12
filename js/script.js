/*console.log("first call");
setTimeout(() => {
    console.log("second call")
}, 2000)
console.log("third call");
*/


function changeColor(time, color, callback, reject) {
    let random = Math.floor(Math.random()*10);
    console.log(random);
    setTimeout(() => {
        if(random > 5) {
            document.querySelector("body").style.backgroundColor = color;
            callback();
        }
        else {
            reject();
        }
    }, time)
}

changeColor(1000, "red", () => {
    changeColor(1000, "yellow", () => {
        changeColor(1000, "green", () => {
            changeColor(1000, "brown", () => {
                changeColor(1000, "pink", () => {
                    changeColor(1000, "black", () => {
                        changeColor(1000, "orange", () => {},
                         () =>  console.log("Your Request to change the color to orange Rejected"))
                    }, () =>  console.log("Your Request to change the color to black Rejected"))
                }, () =>  console.log("Your Request to change the color to pink Rejected"))
            }, () =>  console.log("Your Request to change the color to brown Rejected"))
        }, () =>  console.log("Your Request to change the color to green Rejected"))
    }, () =>  console.log("Your Request to change the color to yellow Rejected"))
}, () =>  console.log("Your Request to change the color to red Rejected"))

