document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(navLink => {
                    navLink.classList.remove("active");
                });
                
                navLinks[index].classList.add("active");

                sidebarLinks.forEach(sidebarLink => {
                    sidebarLink.classList.remove("active");
                });
                sidebarLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("load", function() {
        updateActiveLink();

        if (!window.location.hash) {
            const homeSection = document.getElementById("home");
            window.scrollTo({
                top: homeSection.offsetTop,
                behavior: "smooth"
            });

            sidebarLinks.forEach(sidebarLink => {
                sidebarLink.classList.remove("active");
            });
            sidebarLinks[0].classList.add("active");
        }
    });
    window.addEventListener("scroll", updateActiveLink);

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
        }, 200); 
    } else {
        setTimeout(function() {
            element.textContent = ""; // Reset the text content
            typeWriter(element, text, 0); // Restart typing
        }, 2000); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const studentElement = document.querySelector(".stud");
    typeWriter(studentElement, text, 0); // Start typing "Student" 
});

function toggleMenu(x){
	x.classList.toggle("change");

	var sideBar = document.getElementById("sidebar");
	sidebar.style.width = sidebar.style.width === "150px" ? "0" : "150px";
}
