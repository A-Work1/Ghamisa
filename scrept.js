const words = document.querySelectorAll('.word');
let delay = 0;

for (let i = 0; i < words.length; i++) {
  setTimeout(() => {
    words[i].classList.add('show');
  }, delay);
  delay += 500; // تحديد التأخير بين كل كلمة بالميلي ثانية (هنا 500 ميلي ثانية)
}

window.onload = function() {
  var button = document.getElementById('fixedButton');
  button.style.bottom = '20px'; // تحريك الزر إلى الأسفل

  // يمكنك إضافة المزيد من الأكواد هنا لتنفيذ العمليات الأخرى بعد ظهور الزر
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // الدالة لزيادة العداد
    function increaseCounter(targetElement, targetCount) {
        var currentCount = parseInt(targetElement.innerText);
        var increment = 1; // الزيادة في كل مرة

        // تحديث العداد بزيادة الزيادة المحددة
        var interval = setInterval(function() {
            currentCount += increment;
            targetElement.innerText = currentCount + "+";

            // إذا تجاوز العدد المطلوب، قم بإيقاف العداد
            if (currentCount >= targetCount) {
                clearInterval(interval);
                targetElement.innerText = targetCount + "+";
            }
        }, 50); // زمن التحديث بالميلي ثانية (هنا 50 ميلي ثانية)
    }

    // تشغيل العدادات
    increaseCounter(document.getElementById('counter1'), 100);
    increaseCounter(document.getElementById('counter2'), 200);
    increaseCounter(document.getElementById('counter3'), 300);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))