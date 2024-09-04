//淡入效果
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 在元素已經淡入後停止觀察
        }
      });
    },
    { threshold: 0.1 }
  ); // 當元素有 10% 可見時觸發

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    observer.observe(element);
  });
});
// 獲取按鈕元素
var topButton = document.getElementById("topButton");
// 當用戶滾動頁面時，如果滾動距離超過 20px，就顯示按鈕
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
// 當用戶點擊按鈕時，滾動到頁面頂部
topButton.onclick = function () {
  document.body.scrollTop = 0; // 對於 Safari
  document.documentElement.scrollTop = 0; // 對於 Chrome, Firefox, IE 和 Opera
};
// 向左滑入效果
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // observer.unobserve(entry.target);
          // 在元素已經滑入後停止觀察
        }
      });
    },
    { threshold: [0.1] }
  ); // 使用多個閾值確保較早觸發

  const elements = document.querySelectorAll(".slide-in");
  elements.forEach((element) => {
    observer.observe(element);
  });
});

// 向上滑入效果
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // observer.unobserve(entry.target);
          // 在元素已經滑入後停止觀察
        }
      });
    },
    { threshold: [0.1, 0.5] }
  ); // 使用多個閾值確保較早觸發

  const elements = document.querySelectorAll(".slide-up");
  elements.forEach((element) => {
    observer.observe(element);
  });
});

// 向右滑入效果
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // observer.unobserve(entry.target);
          // 在元素已經滑入後停止觀察
        }
      });
    },
    { threshold: [0.1, 0.5] }
  ); // 使用多個閾值確保較早觸發

  const elements = document.querySelectorAll(".slide-in-right");
  elements.forEach((element) => {
    observer.observe(element);
  });
});

//手機版RWD：hamburger按鈕功能--切換nav元素顯示狀態
document.querySelector(".hamburger").addEventListener("click", function () {
  var nav = document.querySelector("nav");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});