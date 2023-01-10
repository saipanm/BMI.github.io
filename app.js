var button = document.getElementById("button");
    button.addEventListener("click", function(){
            var height = document.getElementById("height").value;
            var weight = document.getElementById("weight").value;
            var result = document.getElementById("result");
            var heightError = document.getElementById("heightError");
            var weightError = document.getElementById("weightError");
            var bmi = weight / (height/100 * height/100);
            if(height == ""){
                heightError.innerHTML = "กรุณากรอกส่วนสูง";
            }else if(weight == ""){
                weightError.innerHTML = "กรุณากรอกน้ำหนัก";
            }else{
                result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2);
                if(bmi.toFixed(2)){
                    if(bmi < 18.5){
                        result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2) + "น้ำหนักน้อยกว่ามาตรฐาน";
                    }else if(bmi >= 18.5 && bmi <= 24.9){
                        result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2) + "น้ำหนักปกติ";
                    }else if(bmi >= 25.0 && bmi <= 29.9){
                        result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2) + "น้ำหนักมากกว่ามาตฐาน";
                    }else if(bmi >= 30.0 && bmi <= 34.9){
                        result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2) + "อ้วนระดับ 1";
                    }else if(bmi  > 35){
                        result.innerHTML = "ค่าดัชนีมวลกายของคุณคือ " + bmi.toFixed(2) + "อ้วนระดับ 2"; 
                    }
                } 
            }

        });
  