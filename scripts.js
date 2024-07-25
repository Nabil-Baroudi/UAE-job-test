document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-buttons button");

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      navButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");
    });
  });
});

//main header section
document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector(".main-header");
  const scrollBars = document.querySelectorAll(".scroll-bars span");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const images = [
    "images/background-upper.png",
    "images/image2 (2).png",
    "images/image2.jpg",
    "images/image2.png",
  ];

  let currentIndex = 0;

  function updateImage() {
    mainHeader.style.backgroundImage = `url('${images[currentIndex]}')`;
    mainHeader.classList.add("fade");
    setTimeout(() => mainHeader.classList.remove("fade"), 1500);
    updateScrollBars();
  }

  function updateScrollBars() {
    scrollBars.forEach((bar, index) => {
      bar.classList.toggle("active", index === currentIndex);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  let imageInterval = setInterval(nextImage, 5000);

  leftArrow.addEventListener("click", function () {
    clearInterval(imageInterval);
    prevImage();
    imageInterval = setInterval(nextImage, 10000);
  });

  rightArrow.addEventListener("click", function () {
    clearInterval(imageInterval);
    nextImage();
    imageInterval = setInterval(nextImage, 10000);
  });

  updateImage();
});

//councail members section.
document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".nav-arrow-left");
  const rightArrow = document.querySelector(".nav-arrow-right");
  const memberCounter = document.querySelector(".member-counter");
  let currentMember = 0;
  const totalMembers = 14;

  const members = [
    {
      name: "H.H. Sheikh Ahmed Bin Saeed Al Maktoum",
      position: "Chairman, Dubai Free Zones Council",
      description:
        "The Dubai Free Zones Council (DFZC) aims to drive the development of free zones in Dubai in order to attract investments and create an enabling environment for boosting diverse areas of the nation.",
      image: "images/Council member.png",
    },
    {
      name: "Lorem Ipsum",
      position: "Chairman, of the Lorem Ipsum",
      description: "The Dubai Free Zones Council of Lorem Ipsums XD.",
      image: "images/image2 (2).png",
    },
    // Add more member objects here...
  ];

  function updateMember(index) {
    const member = members[index];
    const councilImage = document.querySelector(".council-image");
    const councilMemberTitle = document.querySelector(".council-member-title");
    const councilMemberPosition = document.querySelector(
      ".council-member-position"
    );
    const councilMemberDescription = document.querySelector(
      ".council-member-description"
    );
    const readMore = document.querySelector(".read-more");

    // Add fade-out class
    councilImage.classList.add("fade-out");
    councilMemberTitle.classList.add("fade-out");
    councilMemberPosition.classList.add("fade-out");
    councilMemberDescription.classList.add("fade-out");
    readMore.classList.add("fade-out");

    // After fade-out, update content and add fade-in class
    setTimeout(() => {
      councilImage.src = member.image;
      councilMemberTitle.textContent = member.name;
      councilMemberPosition.textContent = member.position;
      councilMemberDescription.textContent = member.description;

      councilImage.classList.remove("fade-out");
      councilMemberTitle.classList.remove("fade-out");
      councilMemberPosition.classList.remove("fade-out");
      councilMemberDescription.classList.remove("fade-out");
      readMore.classList.remove("fade-out");

      councilImage.classList.add("fade-in");
      councilMemberTitle.classList.add("fade-in");
      councilMemberPosition.classList.add("fade-in");
      councilMemberDescription.classList.add("fade-in");
      readMore.classList.add("fade-in");

      // Remove fade-in class after animation duration
      setTimeout(() => {
        councilImage.classList.remove("fade-in");
        councilMemberTitle.classList.remove("fade-in");
        councilMemberPosition.classList.remove("fade-in");
        councilMemberDescription.classList.remove("fade-in");
        readMore.classList.remove("fade-in");
      }, 1500);

      memberCounter.textContent = `(${index + 1}/${totalMembers})`;
    }, 1500); // Match this timeout with the fade-out duration
  }

  leftArrow.addEventListener("click", function () {
    currentMember = (currentMember - 1 + members.length) % members.length;
    updateMember(currentMember);
  });

  rightArrow.addEventListener("click", function () {
    currentMember = (currentMember + 1) % members.length;
    updateMember(currentMember);
  });

  setInterval(function () {
    currentMember = (currentMember + 1) % members.length;
    updateMember(currentMember);
  }, 5000);

  updateMember(currentMember);
});

// ==========================footer==================================

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
