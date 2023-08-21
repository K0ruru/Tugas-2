let index = 0;

const slides = [
	{
		id: "1",
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
		loanLink: "loan-book.html?id=1",
	},
	{
		id: "2",
		title: "Komi-san Can't Communicate",
		description:
			"It's Shouko Komi's first day at the prestigious Itan Private High School, and she has already risen to the status of the school's Madonna. With long black hair and a tall, graceful appearance, she captures the attention of anyone who comes across her. There's just one problem though—despite",
		image: "../Public/Images/Komi.jpg",
		tags: ["Romance", "Comedy", "School", "Shounen"],
		link: "books.html?id=2",
		loanLink: "link-to-loan",
	},
	{
		id: "3",
		title: "Rent-A-Girlfriend",
		description:
			"Dumped by his girlfriend, emotionally shattered college student Kazuya Kinoshita attempts to appease the void in his heart through a rental girlfriend from a mobile app. At first, Chizuru Mizuhara seems to be the perfect girl with everything he could possibly ask for: great looks and a cute, caring",
		image: "../Public/Images/Rent.jpg",
		tags: ["Romance", "Comedy", "Slice Of Life"],
		link: "books.html?id=3",
		loanLink: "link-to-loan",
	},
	{
		id: "4",
		title: "Alya Sometimes Hides Her Feelings in Russian",
		description:
			"Aalya, a beautiful silver-haired girl who sits next to me, occasionally speaks Russian. She says that she is insulting me, but that is not true! In Russian, she is actually saying",
		image: "../Public/Images/Alya.webp",
		tags: ["Romance", "Comedy", "Slice Of Life", "School"],
		link: "books.html?id=4",
		loanLink: "link-to-loan",
	},
	{
		id: "5",
		title: "The teacher can not tell me love",
		description:
			"A lazy student and a straight-laced teacher. At first glance, they seem like they are on bad terms, but things get different after classes... ",
		image: "../Public/Images/Sensei.jpg",
		tags: ["Romance", "Comedy", "Slice Of Life", "School"],
		link: "books.html?id=5",
		loanLink: "link-to-loan",
	},
	{
		id: "6",
		title: "Vagabond",
		description:
			"A lazy student and a straight-laced teacher. At first glance, they seem like they are on bad terms, but things get different after classes... ",
		image: "../Public/Images/Vagabond.webp",
		tags: ["Action", "Adventure", "Drama", "Historical", "Samurai"],
		link: "books.html?id=6",
		loanLink: "link-to-loan",
	},
];

document.addEventListener("DOMContentLoaded", () => {
	const viewInfoButton = document.querySelector(".preview__button");

	viewInfoButton.addEventListener("click", () => {
		const selectedBook = slides[index];
		const queryString = `?id=${selectedBook.id}`;
		const bookDetailsURL = `books.html${queryString}`;

		window.location.href = bookDetailsURL;
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const content = document.querySelector(".book__content");

	const urlParams = new URLSearchParams(window.location.search);
	const productId = urlParams.get("id");

	const selectedBook = slides.find((book) => book.id === productId);

	if (selectedBook) {
		const bookImg = document.createElement("img");
		bookImg.src = selectedBook.image;

		const textContainer = document.createElement("div");
		textContainer.className = "book__text";

		const title = document.createElement("h2");
		title.textContent = selectedBook.title;

		const description = document.createElement("p");
		description.textContent = selectedBook.description;

		const tags = document.createElement("ul");
		selectedBook.tags.forEach((tag) => {
			const tagItem = document.createElement("li");
			tagItem.textContent = tag;
			tags.appendChild(tagItem);
		});

		content.appendChild(bookImg);
		content.appendChild(textContainer);
		textContainer.appendChild(title);
		textContainer.appendChild(tags);
		textContainer.appendChild(description);
	}
});
