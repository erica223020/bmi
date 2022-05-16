function calculateBmi(height,weight){
    let bmi = weight/Math.pow(height/100,2); //Math.pow 平方
    if(bmi<18.5){
        return "過輕";
    }else if(bmi>=18.5 && bmi<24){
        return "理想";
    }else if(bmi>=24 && bmi<27){
        return "過重";
    }else if(bmi>=27 && bmi<30){
        return "輕度肥胖";
    }else if(bmi>=30 && bmi<35){
        return "中度肥胖";
    }else if(bmi>=35){
        return "重度肥胖";
    }
}