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

document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.querySelector(".main-header");
  const scrollBars = document.querySelectorAll(".scroll-bars span");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  const images = [
    //images used for test purposes
    "background-upper.png",
    "image2 (2).png",
    "image2.jpg",
    "image2.png",
  ];

  let currentIndex = 0;

  function updateImage() {
    mainHeader.style.backgroundImage = `url('${images[currentIndex]}')`;
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

  // Set up interval for automatic image change
  let imageInterval = setInterval(nextImage, 10000);

  // Set up arrow navigation
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

  // Initial setup
  updateImage();
});

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
      image: "Council member.png",
    },
    {
      name: "Lorem Ipsum",
      position: "Chairman, of the Lorem Ipsum",
      description: "The Dubai Free Zones Council of Lorem Ipsums XD.",
      image: "image2 (2).png",
    },
    // Add more member objects here...
  ];

  function updateMember(index) {
    const member = members[index];
    document.querySelector(".council-image").src = member.image;
    document.querySelector(".council-member-title").textContent = member.name;
    document.querySelector(".council-member-position").textContent =
      member.position;
    document.querySelector(".council-member-description").textContent =
      member.description;
    memberCounter.textContent = `(${index + 1}/${totalMembers})`;
  }

  leftArrow.addEventListener("click", function () {
    currentMember = (currentMember - 1 + members.length) % members.length;
    updateMember(currentMember);
  });

  rightArrow.addEventListener("click", function () {
    currentMember = (currentMember + 1) % members.length;
    updateMember(currentMember);
  });

  // Automatic looping functionality
  setInterval(function () {
    currentMember = (currentMember + 1) % members.length;
    updateMember(currentMember);
  }, 5000);

  // Initial setup
  updateMember(currentMember);
});

// ==========================footer==================================

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
