// script.js

document.addEventListener("DOMContentLoaded", function () {
  const finalText = "[CLICK ME TO ENTER]";
  const scrambleDuration = 2000; // Duration of scrambling effect in milliseconds

  // Scramble effect function
  function scrambleText(element, duration) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const originalText = element.textContent;
    const scrambleText = Array.from(
      { length: originalText.length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
    let startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentText = Array.from(originalText)
          .map((char, i) =>
            progress < 0.5 ? scrambleText[i] : originalText[i]
          )
          .join("");
        element.textContent = currentText;
        requestAnimationFrame(update);
      } else {
        element.textContent = originalText;
      }
    }

    requestAnimationFrame(update);
  }

  const scrambleTextElement = document.querySelector(".enter-text");

  // Apply scramble effect
  scrambleText(scrambleTextElement, scrambleDuration);

  // Select all social media icons
  const socialIcons = document.querySelectorAll(".social-icon");

  socialIcons.forEach((icon) => {
    // Remove the title attribute on mouseover
    icon.addEventListener("mouseover", () => {
      icon.removeAttribute("title");
    });

    // Restore the title attribute on mouseout
    icon.addEventListener("mouseout", () => {
      const title = icon.getAttribute("data-title");
      if (title) {
        icon.setAttribute("title", title);
      }
    });
  });

  // Function to handle page transition
  const handlePageTransition = (event) => {
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = event.currentTarget.href;
    }, 500); // Match the CSS transition duration
  };

  // Add event listener to links for smooth transitions
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", handlePageTransition);
  });

  // Handle fade-in effect on page load
  document.body.style.opacity = 1; // Ensure it starts fully opaque
});
