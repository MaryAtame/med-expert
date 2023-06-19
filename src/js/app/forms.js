import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-form]");

  elements.forEach((item) => {
    new Form(item);
  });
});

class Form {
  constructor(el) {
    this.el = el;
    this.url = this.el.getAttribute("action");
    this.button = this.el.querySelector("[data-form-button]");
    this.buttonText = this.button.innerText;
    this.setListeners();
  }

  setListeners() {
    this.el.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submit();
    });
  }

  getData() {
    const els = [
      ...this.el.querySelectorAll("input"),
      ...this.el.querySelectorAll("textarea"),
      ...this.el.querySelectorAll("select"),
    ];
    const data = new FormData();

    els.forEach((item) => {
      if (item.type === "file") {
        data.append(item.name, item.files[0]);
      } else if (item.type === "radio" || item.type === "checkbox") {
        if (item.checked) data.append(item.name, item.value);
      } else {
        data.append(item.name, item.value);
      }
    });

    return data;
  }

  disable(state) {
    if (state) {
      this.button.setAttribute("disabled", "disabled");
    } else {
      this.button.removeAttribute("disabled");
    }
  }

  setMessage(text) {
    this.buttonText.innerHTML = text;
  }

  submit() {
    this.disable(true);
    this.setMessage("Отправка...");

    axios
      .post(this.url, this.getData())

      .then((response) => {
        console.log(response);
        this.setMessage("Отправлено!");
      })
      .catch((error) => {
        console.error(error);
        this.setMessage("Ошибка");
      })
      .finally(() => {
        setTimeout(() => {
          this.setMessage("Отправить");
          this.disable(false);
        }, 3000);
      });
  }
}
