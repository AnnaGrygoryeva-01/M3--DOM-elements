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

// 3. За допомогою prompt отримати у користувача його ім’я, після чого створити і відобразити на сторінці елемент <h1>, який містить текст “Вітаю, (введене користувачем ім’я)”
