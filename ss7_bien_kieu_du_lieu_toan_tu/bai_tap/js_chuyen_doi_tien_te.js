function clickme() {
    let price = document.getElementById("num").value;
    let from = document.getElementById("select1").value;
    let to = document.getElementById("select2").value;
    let result;
    if(from == "vnd" && to == "usd"){
        result =  price / 23000;
        document.getElementById("print").style.color = "blue"
        document.getElementById("print").innerText = "Result: "+result +"$";
    }else if(from == "usd" && to == "vnd"){
        result = price * 23000;
        document.getElementById("print").style.color = "blue"
        document.getElementById("print").innerText ="Result: "+result+ "Đ";
    }else if(from == "usd" && to == "vnd"){
        document.getElementById("print").style.color = "blue"
        document.getElementById("print").innerText ="Result: "+price+"$";
    }else{
        document.getElementById("print").style.color = "blue"
        document.getElementById("print").innerText="Result: "+price+"Đ";
    }
}

