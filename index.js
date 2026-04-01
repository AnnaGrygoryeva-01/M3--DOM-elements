// 1. За допомогою DOM створити елемент section. Встановити у нього атрибут id зі значенням “root”. Всередину цього елемента прописати довільний рядок тексту. Встановити колір тексту для елемента. Відобразити елемент, зробивши його дочірнім до <body>

const sectionGraphicDesign = document.createElement("section");
sectionGraphicDesign.setAttribute("id", "root");
sectionGraphicDesign.style.color = "purple";

const sectionGraphicDesignHeader = document.createElement("h2");
sectionGraphicDesignHeader.textContent = "Graphic Design";

const sectionGraphicDesignText = document.createElement("p");
sectionGraphicDesignText.textContent =
  "Lorem10Lorem ipsum dolor sit amet consectetur adipisicing elit.";

sectionGraphicDesign.append(
  sectionGraphicDesignHeader,
  sectionGraphicDesignText,
);
document.body.append(sectionGraphicDesign);

// 2. За допомогою DOM отримати посилання на існуючий на сторінці елемент (div або section, який заздалегідь має існувати в розмітці і містити якийсь тексту) та змінити йому колір тла на фіолетовий, а колір тексту на білий.

const sectionDigitalMarketing = document.querySelector(
  ".sectionDigitalMarketing",
);
sectionDigitalMarketing.style.backgroundColor = "purple";
sectionDigitalMarketing.style.color = "white";

// 3. За допомогою prompt отримати у користувача його ім’я, після чого створити і відобразити на сторінці елемент <h1>, який містить текст “Вітаю, (введене користувачем ім’я)”

const greeting = document.createElement("h1");

function setGreeting() {
  while (true) {
    const userName = prompt("Hello, what is your name?");

    try {
      if (userName === null) {
        throw new Error("Operation cancelled by user.");
      }

      if (userName.trim().length === 0) {
        throw new Error("Name cannot be empty. Please try again.");
      }

      if (!isNaN(userName)) {
        throw new TypeError("Name cannot be a number! Please use letters.");
      }

      return `Welcome, ${userName}, would you like to find out more about our services?`;
    } catch (error) {
      alert(`${error.name}: ${error.message}`);

      if (error.message === "Operation cancelled by user.") {
        return "Welcome, would you like to find out more about our services?";
      }
    }
  }
}

greeting.textContent = setGreeting();
document.body.prepend(greeting);
