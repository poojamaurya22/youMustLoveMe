import "./styles.css";

(function () {
  var flag = 1;
  var no = document.getElementById("no");
  var yes = document.getElementById("yes");
  var yesModal = document.getElementById("yesModal");
  var startModal = document.getElementById("startModal");
  var yesSpan = document.getElementsByClassName("yesClose")[0];
  var startSpan = document.getElementsByClassName("startClose")[0];

  startModal.style.display = "block";

  yes.addEventListener("click", function () {
    yesModal.style.display = "block";
  });

  no.addEventListener("mouseover", function () {
    if (flag === 1) {
      no.style.left = "60%";
      no.style.top = "10%";
      flag = 2;
    } else if (flag === 2) {
      no.style.left = "20%";
      no.style.top = "10%";
      flag = 3;
    } else if (flag === 3) {
      no.style.left = "40%";
      no.style.top = "30%";
      flag = 1;
    }
  });

  startSpan.addEventListener("click", function () {
    startModal.style.display = "none";
  });

  yesSpan.addEventListener("click", function () {
    yesModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === yesModal) {
      yesModal.style.display = "none";
    } else if (event.target === startModal) {
      startModal.style.display = "none";
    }
  });
})();
