//Slick
$(".hero").slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: "linear",
});

//acordeon

$(".acc-head").on("click", function () {
	if ($(this).hasClass("active")) {
		$(this).siblings(".acc-content").slideUp();
		$(this).removeClass("active");
	} else {
		$(".acc-content").slideUp();
		$(".acc-head").removeClass("active");
		$(this).siblings(".acc-content").slideToggle();
		$(this).toggleClass("active");
	}
});

//Change text

$(".change-text").slick({
	infinite: true,
	arrows: false,
	speed: 500,
	fade: true,
	cssEase: "linear",
	autoplay: true,
	autoplaySpeed: 5000,
});

// Hamburger menu

$(".hamburger-wrapper").on("click", function () {
	$(".hamburger-menu").toggleClass("animate");
	$(".nav").toggleClass("visible");
});
$(".nav > ul > li > a").on("click", function () {
	$(".hamburger-menu").removeClass("animate");
	$(".nav").removeClass("visible");
});

// slik Team-boxes

let sliderBool = false,
	sliderBreakpoint = 1367,
	sliderSettings = {
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: sliderBreakpoint,
				settings: "unslick",
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					arrows: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					arrows: true,
					dots: false,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 300,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 279,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
		prevArrow: ".arrow-prev",
		nextArrow: ".arrow-next",
	};

function sliderInit(sliderElem) {
	if (window.innerWidth <= sliderBreakpoint) {
		if (sliderBool == false) {
			$("" + sliderElem + "").slick(sliderSettings);
			sliderBool = true;
		}
	} else {
		sliderBool = false;
	}
}

// init
sliderInit(".team-boxes");

// resize
$(window).resize(function () {
	sliderInit(".team-boxes");
});

//Modal

$(".modal-toggle").on("click", function (e) {
	$(".modal").toggleClass("is-visible");
});

// Fixed nav bar

window.addEventListener("scroll", function () {
	let header = document.querySelector(".navbar");
	let windowPosition = window.scrollY > 0;
	header.classList.toggle("scrolling-active", windowPosition);
});

// light switch

var lightSwitch = $(".switch");

function updateLights(lightStatus) {
	if (lightStatus) {
		$("body").css({ background: "white", color: "#fff" });
		lightSwitch.prop("checked", true);
		localStorage.setItem("lights", "true");
	} else {
		$("body").css({ background: "#2c3e50", text_color: "#ffffff" });
		lightSwitch.prop("checked", false);
		localStorage.setItem("lights", "false");
	}
}

function lightCheck(toggleMode) {
	var lightStatus = localStorage.getItem("lights");
	if (lightStatus === "true") {
		if (toggleMode) {
			updateLights(false);
		} else {
			updateLights(true);
		}
	} else if (lightStatus === null) {
		updateLights(true);
	} else {
		if (toggleMode) {
			updateLights(true);
		} else {
			updateLights(false);
		}
	}
}

lightSwitch.change(function () {
	lightCheck(true);
});

lightCheck(false);

//form API

$(document).ready(function () {
	$(".buttonForm").click(function () {
		$("#imageFruit").attr("src", "");
		let q = $("#inputPreferedFruit").val();
		let url =
			"https://pixabay.com/api/?key=11498651-6a7b5ecb981bf472f87ccb3a3&q=" +
			q +
			"&image_type=photo";

		$.get(url, function (data, status) {
			$("#formName").text("Thank you " + $("#inputFullName").val());
			$("#imageFruit").attr(
				"src",
				data.hits[Math.floor(Math.random() * data.hits.length + 1)]
					.largeImageURL
			);
		});
	});
});

//want to play a game

// const gameDifficult = $(".game_difficult");
// const gameType = $(".game_type");
// const gameStart = $(".game_btn");
// const gameOverlay = $(".game_overlay");
// const scooterArea = $(".game_content_area");

// gameDifficult.on("click", function () {
// 	gameType.text(gameType.text() == "mixed" ? "by color" : "mixed");
// });

// gameStart.on("click", function () {
// 	$(".header").toggleClass("header-disabled");
// 	$(".nav_container").toggleClass("nav_container-disabled");
// 	gameOverlay.addClass("active");

// 	const scooterArr = Array.apply(null, (lenght: 10));
// 	let scooterItems;
// 	let energySpans;

// 	function populateWithScooter(procentageNum) {
// 		let opacity;

// 		if (!procentageNum) {
// 			let procentageNumberPhase1 =
// 				Math.floor(Math.random() * (100 - 50 + 1)) + 50;
// 			procentageNum = Math.trunc(procentageNumberPhase1 / 10) * 10;

// 			opacity = procentageNum / 100;
// 		}

// 		let randomNumber = Math.cell(Math.random() * 3) - 1;

// 		scooterItems = `
// 		<div class="scooterItems">
// 			<span class="scooterItems_energy">$(procentageNum)%</span>
// 			<img src=""

// 		</div>`;

// 		energySpans = $(".scooter_energy");
// 		let individualEnergy;

// 		return scooterItems;
// 	}

// 	const scooterArray = scooterArr.map((scooter) => {
// 		return populateWithScooter;
// 	});

// 	if (scooterArea[0].children.length == 0) {
// 		for (let i = 0; i < scooterArray.length; i++) {
// 			scooterArea.append(scooterArray[i]);
// 		}
// 	}

// 	$("#game_btn-stop").on("click", function (e) {
// 		gameOverlay.removeClass("active");
// 		scooterArea.empty();
// 	});

// 	$("#game_btn-add").on("click", function (e) {
// 		$(".header").addClass("header-disabled");
// 		$(".nav_container").addClass("nav_container-disasbled");
// 		e.stopImediatePropagation();
// 		let newScooter = populateWithScooter(100);
// 		scooterArea.append(newScooter);
// 	});

// 	$(".scooterItems_img").on("click", function (e) {
// 		e.currentTarget.attributes.style.nodeValue = `opacity: 1`;
// 		e.currentTarget.parentElement.firstChild.nextSibling.textContent = `100%`;
// 	});

// 	if (gameType.text() == "mixed") {
// 	} else if (gameType.text() == "by color") {
// 	}
// });
