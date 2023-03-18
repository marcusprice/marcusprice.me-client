// tooltip stuff
const suh = "suh"
const u = "marcusprice88";
const at = "&#64;";
const d = "gmail";
const e = "com";
const em = u + at + d + "." + e;

const emailElement = document.querySelector(".email");
emailElement.innerHTML = `<a href="mailto:${em}">${em}</a>`;

// codebox clipboard interaction
const clipboardContainer = document.querySelector(".clipboard-container");
const clipboardIcon = document.querySelector(".clipboard-icon");
const checkIcon = document.querySelector(".check-icon");
const alertIcon = document.querySelector(".alert-icon");

function showCheckIcon() {
  clipboardContainer.style = "display: block";
  clipboardIcon.style = "display: none";
  checkIcon.style = "display: block";
}

function showClipboardIcon() {
  clipboardContainer.style = "";
  checkIcon.style = "display: none";
  alertIcon.style = "display: none";
  clipboardIcon.style = "display: block";
}

function showAlertIcon() {
  clipboardIcon.style = "display: none";
  checkIcon.style = "display: none";
  alertIcon.style = "display: block";
}

clipboardContainer.addEventListener("click", () => {
  const curlCommand = "curl https://marcusprice.me";
  navigator.clipboard
    .writeText(curlCommand)
    .then(() => {
      // briefly show check/confirm icon
      showCheckIcon();
      setTimeout(showClipboardIcon, 1500);
    })
    .catch(() => {
      showAlertIcon();
      const errorMessage =
        "Something mildly bad happened, and I'm not quite sure what. Wish I could be more help";
      console.error(errorMessage);
    });
});

