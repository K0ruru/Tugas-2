let index = 0;

const slides = [
  {
    title: "One-Punch Man",
    description:
      "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters,",
    image: "../Public/Images/OPM.jpg",
    tags: [
      "Action",
      "Comedy",
      "Parody",
      "Sci-fi",
      "Super Power",
      "Super Natural",
    ],
    link: "books.html?id=1",
    loanLink: "link-to-loan",
    todayViews: 44644,
    weekViews: 53241,
    monthViews: 102901,
  },
  {
    title: "Komi-san Can't Communicate",
    description:
      "It's Shouko Komi's first day at the prestigious Itan Private High School, and she has already risen to the status of the school's Madonna. With long black hair and a tall, graceful appearance, she captures the attention of anyone who comes across her. There's just one problem though—despite",
    image: "../Public/Images/Komi.jpg",
    tags: ["Romance", "Comedy", "School", "Shounen"],
    link: "books.html?id=2",
    loanLink: "link-to-loan",
    todayViews: 14240,
    weekViews: 31241,
    monthViews: 129301,
  },
  {
    title: "Rent-A-Girlfriend",
    description:
      "Dumped by his girlfriend, emotionally shattered college student Kazuya Kinoshita attempts to appease the void in his heart through a rental girlfriend from a mobile app. At first, Chizuru Mizuhara seems to be the perfect girl with everything he could possibly ask for: great looks and a cute, caring",
    image: "../Public/Images/Rent.jpg",
    tags: ["Romance", "Comedy", "Slice Of Life"],
    link: "books.html?id=3",
    loanLink: "link-to-loan",
    todayViews: 45940,
    weekViews: 12341,
    monthViews: 122901,
  },
  {
    title: "Alya Sometimes Hides Her Feelings in Russian",
    description:
      "Aalya, a beautiful silver-haired girl who sits next to me, occasionally speaks Russian. She says that she is insulting me, but that is not true! In Russian, she is actually saying",
    image: "../Public/Images/Alya.webp",
    tags: ["Romance", "Comedy", "Slice Of Life", "School"],
    link: "books.html?id=4",
    loanLink: "link-to-loan",
    todayViews: 13240,
    weekViews: 121341,
    monthViews: 210901,
  },
  {
    title: "The teacher can not tell me love",
    description:
      "A lazy student and a straight-laced teacher. At first glance, they seem like they are on bad terms, but things get different after classes... ",
    image: "../Public/Images/Sensei.jpg",
    tags: ["Romance", "Comedy", "Slice Of Life", "School"],
    link: "books.html?id=5",
    loanLink: "link-to-loan",
    todayViews: 34440,
    weekViews: 43241,
    monthViews: 91901,
  },
  {
    title: "Vagabond",
    description:
      "A lazy student and a straight-laced teacher. At first glance, they seem like they are on bad terms, but things get different after classes... ",
    image: "../Public/Images/Vagabond.webp",
    tags: ["Action", "Adventure", "Drama", "Historical", "Samurai"],
    link: "books.html?id=6",
    loanLink: "link-to-loan",
    todayViews: 1340,
    weekViews: 22241,
    monthViews: 300901,
  },
  {
    id: "7",
    title: "Jujutsu Kaisen",
    description:
      "Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as Curses terrorize humanity from the shadows, and powerful humans known as Jujutsu sorcerers use mystical arts to exterminate them. When high school student Yuuji Itadori finds a dried-up finger of the legendary",
    image: "../Public/Images/JJK.jpg",
    tags: ["Action", "Adventure", "Drama", "Historical", "Samurai"],
    link: "books  .html?id=7",
    loanLink: "link-to-loan",
  },
  {
    id: "8",
    title: "Solo Leveling",
    description:
      "Ten years ago, the Gate appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as Hunters. Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the Worlds",
    image: "../Public/Images/Solo.jpg",
    tags: ["Action", "Adventure", "Drama", "Historical", "Samurai"],
    link: "books.html?id=8",
    loanLink: "link-to-loan",
  },
];

// Function to sort the slides array based on the given view count
function sortSlidesByViews(viewCountType) {
  slides.sort((a, b) => b[viewCountType] - a[viewCountType]);
}

// Function to render most viewed books in the most__viewed__box section
function renderMostViewedBooks() {
  const mostViewedContainer = document.querySelector(
    ".most__viewed__container"
  );

  // Clear previous content
  mostViewedContainer.innerHTML = "";

  // Call the function to sort the slides based on the desired view count
  sortSlidesByViews("todayViews");

  // Loop through the sorted slides and render most viewed books
  for (let rank = 0; rank < 5; rank++) {
    const slide = slides[rank];
    const bookBox = document.createElement("div");
    bookBox.classList.add("most__viewed__box");

    const mostViewedBook = document.createElement("div");
    mostViewedBook.classList.add("most__viewed__book");

    const bookImage = document.createElement("img");
    bookImage.src = slide.image;
    bookImage.alt = slide.title;

    const bookDesc = document.createElement("div");
    bookDesc.classList.add("most__viewed__desc");

    const bookTitle = document.createElement("h1");
    bookTitle.textContent = slide.title;

    const tagsList = document.createElement("ul");
    tagsList.classList.add("tags");
    slide.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.classList.add("tag");
      tagItem.textContent = tag;
      tagsList.appendChild(tagItem);
    });

    const mostViewedRankings = document.createElement("div");
    mostViewedRankings.classList.add("most__viewed__ranking");

    const ranking = document.createElement("h3");
    ranking.textContent = `${rank + 1}`;
    mostViewedRankings.appendChild(ranking);

    const viewsCount = document.createElement("p");
    viewsCount.textContent = `${slide.todayViews} VIEWS`;
    mostViewedRankings.appendChild(viewsCount);

    bookDesc.appendChild(bookTitle);
    bookDesc.appendChild(tagsList);

    mostViewedBook.appendChild(bookImage);
    mostViewedBook.appendChild(bookDesc);
    bookBox.appendChild(mostViewedBook);
    bookBox.appendChild(mostViewedRankings);

    mostViewedContainer.appendChild(bookBox);
  }
}

function updateSlide() {
  const slide = slides[index];
  const preview = document.querySelector(".preview");
  const bannerImg = document.querySelector(".banner__img img");
  const bookTitle = document.querySelector(".banner__book__desc h1");
  const bookDesc = document.querySelector(".banner__book__desc p");
  const tagsList = document.querySelector(".banner__book__desc ul");
  const viewInfoButton = document.querySelector(".preview__button");
  const loanButton = document.querySelector(".preview__button.loan");
  const idLink = document.querySelector(".id__link");

  preview.style.backgroundImage = "url('" + slide.image + "')";
  bannerImg.src = slide.image;
  bookTitle.textContent = slide.title;
  bookDesc.textContent = slide.description;

  tagsList.innerHTML = slide.tags
    .map((tag) => `<li class="tag">${tag}</li>`)
    .join("");

  setTimeout(() => {
    preview.style.backgroundImage = "url('" + slide.image + "')";
  }, 100);

  viewInfoButton.href = slide.link;
  loanButton.href = slide.loanLink;
  idLink.href = slide.link;
}

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

document.getElementById("nextButton").addEventListener("click", () => {
  index = (index + 1) % 5;
  updateSlide();
});

document.getElementById("prevButton").addEventListener("click", () => {
  index = (index - 1 + 5) % 5;
  updateSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  updateSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const bookContainer = document.querySelector(".book__container");

  slides.forEach((slide) => {
    const bookBox = document.createElement("div");
    bookBox.classList.add("book__box");

    const bookImage = document.createElement("img");
    bookImage.src = slide.image;
    bookImage.alt = slide.title;

    const bookDesc = document.createElement("div");
    bookDesc.classList.add("book__desc");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = slide.title;

    const tagsList = document.createElement("ul");
    tagsList.classList.add("tags");
    slide.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.classList.add("tag");
      tagItem.textContent = tag;
      tagsList.appendChild(tagItem);
    });

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book__button");

    const viewInfoButton = document.createElement("a");
    viewInfoButton.href = slide.link;
    const viewInfoBtn = document.createElement("button");
    viewInfoBtn.classList.add("preview__button");
    viewInfoBtn.textContent = "View Info";
    viewInfoButton.appendChild(viewInfoBtn);

    const loanButton = document.createElement("a");
    loanButton.href = slide.loanLink;

    const loanBtn = document.createElement("button");
    loanBtn.classList.add("preview__button", "loan");
    loanBtn.textContent = "Loan";
    loanButton.appendChild(loanBtn);

    bookButtons.appendChild(viewInfoButton);
    bookButtons.appendChild(loanButton);
    bookDesc.appendChild(bookTitle);
    bookDesc.appendChild(tagsList);
    bookDesc.appendChild(bookButtons);

    bookBox.appendChild(bookImage);
    bookBox.appendChild(bookDesc);

    bookContainer.appendChild(bookBox);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderMostViewedBooks();
});
