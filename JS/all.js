const height = document.querySelector('.height');//使用者身高
const weight = document.querySelector('.weight');//使用者體重
const btn = document.querySelector('.btn');//送出按鈕
const content = document.querySelector('.content');//結果紀錄區
const list = document.querySelector('.list');//歷史紀錄區

//若資料庫有資料，就轉成物件存進data, 若沒有就創一個空陣列
let data = JSON.parse(localStorage.getItem('bmiData')) || [];

//BMI各數值處理
function calculateBmi(e){
    let h = parseInt(height.value)/100;  //字串轉數字
    let w = parseInt(weight.value);
    let result = w/Math.pow(h,2); //Math.pow 平方
    result = result.toFixed(2);//四捨五入小數點後兩位
    let judge = ""; //結果判斷
    let color = ""; //判斷後給予顏色

    switch (true){
        case(result>0 && result<18.5):
            judge = "過輕";
            color = "#31BAF9";
            break;
        case(result>=18.5 && result<24):
            judge = "理想";
            color = "#86D73F";
            break;
        case(result>=24 && result<27):
            judge = "過重";
            color = "#FF982D";
            break;
        case(result>=27 && result<30):
            judge =  "輕度肥胖";
            color = "#FF6C03";
            break;
        case(result>=30 && result<35):
            judge =  "中度肥胖";
            color = "#FF6C03";
            break;
        case(result>=35):
            judge =  "重度肥胖";
            color = "#FF1200";
            break;
        default:
            alert('資料出錯');
            break;
    }
    
//產生日期 (不使用Date.toISOString()，會有時差)
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if (month<10){month = '0' + month};
    let day = date.getDate();
    if (day<10){day = '0' + day};
    // console.log(`${year}-${month}-${day}`);

//將資料存入Object 
    let bmiObject = {
        height:h,
        weight:w,
        BMI:result,
        bmiJudge:judge,
        color:color,
        time:`${year}-${month}-${day}`
    };

//將最新的資料插入陣列中第一個
    data.splice(0,0,bmiObject);
    updateList(data);
    localStorage.setItem("BMIlist", JSON.stringify(data));
}

//防止輸入區空白
btn.addEventListener('click',checkNum);

function checkNum(e){
    if(height.value == " " || weight.value == "" ||height.value !==isNaN || weight.value !== "")
}