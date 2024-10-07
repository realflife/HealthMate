function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmi-result');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        bmiResult.innerText = `ค่า BMI ของคุณคือ ${bmi}`;

        if (bmi < 18.5) {
            bmiResult.innerText += " (น้ำหนักต่ำกว่าเกณฑ์)";
        } else if (bmi < 24.9) {
            bmiResult.innerText += " (น้ำหนักปกติ)";
        } else if (bmi < 29.9) {
            bmiResult.innerText += " (น้ำหนักเกิน)";
        } else {
            bmiResult.innerText += " (อ้วน)";
        }
    } else {
        bmiResult.innerText = "กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง";
    }
}

function recommendMeal() {
    const goal = document.getElementById('goal').value;
    const mealSuggestion = document.getElementById('meal-suggestion');
    
    if (goal === 'ลดน้ำหนัก') {
        mealSuggestion.innerText = "แนะนำ: สลัดผักและปลา";
    } else if (goal === 'รักษาน้ำหนัก') {
        mealSuggestion.innerText = "แนะนำ: ข้าวกล้องและไก่ย่าง";
    } else {
        mealSuggestion.innerText = "แนะนำ: ขนมปังและเนื้อแดง";
    }
}

function postMessage() {
    const message = document.getElementById('forum-message').value;
    const forumPosts = document.getElementById('forum-posts');
    forumPosts.innerHTML += `<p>${message}</p>`;
    document.getElementById('forum-message').value = ""; // ล้างข้อความ
}

function analyzeFood() {
    const foodItem = document.getElementById('food-item').value;
    const calories = document.getElementById('calories').value;
    const analysisResult = document.getElementById('analysis-result');

    analysisResult.innerText = `อาหาร: ${foodItem}, แคลอรี่: ${calories}`;
}
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// คลิกนอกป๊อปอัปเพื่อปิด
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        closePopup();
    }
}
function openNutritionPopup() {
    document.getElementById('nutrition-popup').style.display = 'block';
}

function closeNutritionPopup() {
    document.getElementById('nutrition-popup').style.display = 'none';
}

function searchFood() {
    var foodInput = document.getElementById('foodInput').value;
    var resultDiv = document.getElementById('foodResult');

    // สร้างข้อมูลอาหารตัวอย่าง (สามารถเชื่อมกับฐานข้อมูลจริงในภายหลัง)
    var foodData = {
        "ข้าวสวย": { nutrition: "พลังงาน: 130 kcal, โปรตีน: 2.7g, ไขมัน: 0.3g" },
        "ไก่ย่าง": { nutrition: "พลังงาน: 165 kcal, โปรตีน: 31g, ไขมัน: 3.6g" },
        "ข้าวผัดไก่": { nutrition: "พลังงาน: 650-700 kcal, โปรตีน: 25g, ไขมัน: 20g,คาร์โบไฮเดรต: 90g" },
        "ก๋วยเตี๋ยวหมูน้ำใส": { nutrition: "พลังงาน: 300-350 kcal, โปรตีน: 15g, ไขมัน: 5g,คาร์โบไฮเดรต: 45g" },
        "ข้าวแกงกะหรี่หมู": { nutrition: "พลังงาน: 750 kcal, โปรตีน: 20-25g, ไขมัน: 25g,คาร์โบไฮเดรต: 100g" },
        "สลัดผัก": { nutrition: "พลังงาน: 200-230 kcal, โปรตีน: 20-25g, ไขมัน: 10g,คาร์โบไฮเดรต: 20g" },
        "ขนมจีนแกงไก่": { nutrition: "พลังงาน: 550-600 kcal, โปรตีน: 15-20g, ไขมัน: 20g,คาร์โบไฮเดรต: 75g" },
        "ข้าวคลุกกะปิ": { nutrition: "พลังงาน: 550-600 kcal, โปรตีน: 20g, ไขมัน: 20g,คาร์โบไฮเดรต: 75g" },
        "โจ๊กหมู": { nutrition: "พลังงาน: 250-300 kcal, โปรตีน: 15g, ไขมัน: 40g,คาร์โบไฮเดรต: 40g,ไฟเบอร์: 1-2g" },
        "โจ๊กหมูใส่ไข่": { nutrition: "พลังงาน: 250-300 kcal, โปรตีน: 15g, ไขมัน: 5g,คาร์โบไฮเดรต: 40g" },
        "ข้าวไข่เจียวหมูสับ": { nutrition: "พลังงาน: 250-300 kcal, โปรตีน: 15g, ไขมัน: 20g,คาร์โบไฮเดรต: 5g" },
        "แซนวิชทูน่า": { nutrition: "พลังงาน: 300-350 kcal, โปรตีน: 15g, ไขมัน: 15g,คาร์โบไฮเดรต: 30g" },
        "ชานมไข่มุก": { nutrition: "พลังงาน: 300-400 kcal, น้ำตาล:30-40g, ไขมัน: 10g,คาร์โบไฮเดรต: 50-60g" },
        "ข้าวมันไก่": { nutrition: "พลังงาน: 600-650 kcal, โปรตีน: 15-20g, ไขมัน: 25g,คาร์โบไฮเดรต: 85g" },
    
    };

    if (foodInput in foodData) {
        var foodInfo = foodData[foodInput];
        resultDiv.innerHTML = "<p>คุณค่าทางโภชนาการ: " + foodInfo.nutrition + "</p>";
    } else {
        resultDiv.innerHTML = "<p>ไม่พบข้อมูลอาหารนี้</p>";
    }
}
function calculateBMR() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
        return;
    }

    var bmr;
    if (gender === "male") {
        // สูตรคำนวณ BMR สำหรับผู้ชาย
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        // สูตรคำนวณ BMR สำหรับผู้หญิง
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    // แสดงผลลัพธ์
    document.getElementById('bmrResult').innerHTML = `ค่า BMR ของคุณคือ: ${bmr.toFixed(2)} กิโลแคลอรี/วัน`;
}
function calculateBMR() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var bmr;

    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    // แสดงผลในป๊อปอัป
    document.getElementById('bmrResult').innerText = "ค่า BMR ของคุณคือ " + bmr.toFixed(2) + " แคลอรี่";
    document.getElementById('bmrPopup').style.display = "block";
}

window.onclick = function(event) {
    const popup = document.getElementById('myPopup');
    if (event.target === popup) {
        popup.style.display = 'none'; // ซ่อนป๊อปอัป
    }
}
