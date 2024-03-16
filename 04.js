// สร้างตัวแปร x y z 
// x จะเก็บข้อมูลของตัวเลข 
x = [-3, -2, -1, 0, 1, 2, 3];
// y z จะเก็บผลลัพธ์จากฟังก์ชัน transformFunction โดยใช้ x เป็นอินพุต
y = [];
z = [];

// ฟังก์ชัน transformFunction เป็นฟังก์ชันที่จะรับค่าพารามิเตอร์ 2 ตัวคือ value, maxValue
function transformFunction(value, maxValue) {
  // โดยจะคำนวณจาก (value + 3) / 6 * maxValue
  // ค่า maxValue ใช้เพื่อปรับขนาดผลลัพธ์
  return (value + 3) / 6 * maxValue;
}

// เก็บความกว้างของกล่องแสดงผล 
let containerWidth = 600;

document.write("<div style='position: relative; width: " + containerWidth + "px; height: 350px; border: 1px solid black;'>");

// วนลูป for ผ่านชุดข้อมูล x 
for (let i = 0; i < x.length; i++) {
  // ภายในลูปจะคำนวณค่าของ y[i], z[i]
  // คำนวณ y[i] จาก x[i] โดยใช้สูตร 0.5 * x[i] + 2
  y[i] = 0.5 * x[i] + 2;
  // คำนวณ z[i] จาก x[i] โดยใช้สูตร -1 * x[i] + 5
  z[i] = -1 * x[i] + 5;
  // เรียกใช้ฟังก์ชัน transformFunction เพื่อแปลง x[i], y[i] และ z[i]
  let transformedX = transformFunction(x[i], 450);
  let transformedY = transformFunction(y[i], 200);
  let transformedZ = transformFunction(z[i], 100);

  // ให้แสดงค่า (x[i], y[i]) เป็นสีแดง และ (x[i], z[i]) เป็นสีน้ำเงิน
  document.write("<p style='color:red; position: absolute; left: " + transformedX + "px; top: " + transformedY + "px;'>(" + x[i] + " , " + y[i] + ")</p>");
  document.write("<p style='color:blue; position: absolute; left: " + transformedX + "px; top: " + transformedZ + "px;'>(" + x[i] + " , " + z[i] + ")</p>");
}
document.write("</div>");