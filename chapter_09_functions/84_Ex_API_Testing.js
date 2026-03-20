
// if (ourStatusCode >= 200 && ourStatusCode < 300) 
//way1
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//way2
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//way3
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}


validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);