document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    // Function to update the active link in the navbar based on the section in view
    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove the "active" class from all links
                navLinks.forEach(navLink => {
                    navLink.classList.remove("active");
                });
                
                // Add the "active" class to the corresponding link
                navLinks[index].classList.add("active");

                // Add the "active" class to the corresponding sidebar link
                sidebarLinks.forEach(sidebarLink => {
                    sidebarLink.classList.remove("active");
                });
                sidebarLinks[index].classList.add("active");
            }
        });
    }

    // Call the updateActiveLink function when the page is loaded and when scrolling
    window.addEventListener("load", function() {
        updateActiveLink();

        // Check if there's a hash in the URL
        if (!window.location.hash) {
            // Scroll to the home section manually if there's no hash (page is refreshed)
            const homeSection = document.getElementById("home");
            window.scrollTo({
                top: homeSection.offsetTop,
                behavior: "smooth"
            });

            // Set the home link in the sidebar as active
            sidebarLinks.forEach(sidebarLink => {
                sidebarLink.classList.remove("active");
            });
            sidebarLinks[0].classList.add("active");
        }
    });
    window.addEventListener("scroll", updateActiveLink);

    // Smooth scrolling when clicking on navbar links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Smooth scrolling when clicking on sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

const text = "Student"; // The text you want to type

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i);
        }, 200); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(function() {
            element.textContent = ""; // Reset the text content
            typeWriter(element, text, 0); // Restart typing
        }, 2000); // Adjust the pause before restarting typing (milliseconds)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const studentElement = document.querySelector(".stud");
    typeWriter(studentElement, text, 0); // Start typing "Student" when the page loads
});

function toggleMenu(x){
	x.classList.toggle("change");

	var sideBar = document.getElementById("sidebar");
	sidebar.style.width = sidebar.style.width === "150px" ? "0" : "150px";
}