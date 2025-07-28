// Mobile Navigation
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroIcons = document.querySelector(".hero-icons")

  if (heroIcons) {
    heroIcons.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeInUp")
    }
  })
}, observerOptions)

// Observe all elements that should animate
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".mission-card, .tech-card, .faculty-card, .timeline-item, .achievement-card, .stat-item, .quiz-instructions, .qr-interface, .address-paragraph",
  )

  animateElements.forEach((el) => {
    observer.observe(el)
  })
})

// QR Code Pattern Animation
document.addEventListener("DOMContentLoaded", () => {
  const qrPattern = document.getElementById("qrPattern")

  if (qrPattern) {
    // Create animated QR pattern
    function createQRPattern() {
      qrPattern.innerHTML = ""
      const gridSize = 8

      for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement("div")
        pixel.style.cssText = `
                    width: calc(100% / ${gridSize});
                    height: calc(100% / ${gridSize});
                    background: ${Math.random() > 0.5 ? "#000" : "transparent"};
                    transition: background 0.5s ease;
                `
        qrPattern.appendChild(pixel)
      }
    }

    createQRPattern()

    // Update pattern every 2 seconds
    setInterval(createQRPattern, 2000)
  }
})

// Typing Effect for HOD Address
function typeText(element, text, speed = 50) {
  if (!element) return

  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Text Reveal Animation for HOD Address
document.addEventListener("DOMContentLoaded", () => {
  const addressParagraphs = document.querySelectorAll(".address-paragraph")

  if (addressParagraphs.length > 0) {
    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-textReveal")
          }, index * 100)
        }
      })
    }, observerOptions)

    addressParagraphs.forEach((paragraph) => {
      textObserver.observe(paragraph)
    })
  }
})

// Timeline Animation
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item")

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = `all 0.8s ease ${index * 0.1}s`
    timelineObserver.observe(item)
  })
})

// Floating Animation for Cards
function addFloatingAnimation() {
  const cards = document.querySelectorAll(".mission-card, .tech-card, .faculty-card")

  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Counter Animation for Stats
function animateCounters() {
  const statNumbers = document.querySelectorAll(".stat-number")

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const finalValue = target.textContent.replace(/\D/g, "")
        const suffix = target.textContent.replace(/\d/g, "")

        let currentValue = 0
        const increment = Math.ceil(finalValue / 50)

        const counter = setInterval(() => {
          currentValue += increment
          if (currentValue >= finalValue) {
            currentValue = finalValue
            clearInterval(counter)
          }
          target.textContent = currentValue + suffix
        }, 50)
      }
    })
  }, observerOptions)

  statNumbers.forEach((stat) => {
    counterObserver.observe(stat)
  })
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
  addFloatingAnimation()
  animateCounters()
})

// Smooth page transitions
window.addEventListener("beforeunload", () => {
  document.body.style.opacity = "0"
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
  document.body.style.transition = "opacity 0.3s ease"
})

// Dynamic gradient animation
function animateGradients() {
  const gradientElements = document.querySelectorAll(".hero-title, .page-title, .section-title")

  gradientElements.forEach((element) => {
    let hue = 0

    setInterval(() => {
      hue = (hue + 1) % 360
      const gradient = `linear-gradient(135deg, 
                hsl(${hue}, 70%, 60%), 
                hsl(${(hue + 120) % 360}, 70%, 60%), 
                hsl(${(hue + 240) % 360}, 70%, 60%)
            )`
      element.style.background = gradient
      element.style.backgroundClip = "text"
      element.style.webkitBackgroundClip = "text"
    }, 100)
  })
}

// Initialize gradient animation after page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(animateGradients, 1000)
})

// Handle active navigation state
function updateActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const linkHref = link.getAttribute("href")

    if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Update active navigation on page load
document.addEventListener("DOMContentLoaded", updateActiveNav)

// Add scroll-based navbar transparency
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  const scrollTop = window.pageYOffset

  if (navbar) {
    if (scrollTop > 100) {
      navbar.style.background = "rgba(0, 0, 0, 0.4)"
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.2)"
    }
  }
})

// Add click animations to buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button, .btn-nav, .btn-primary, .btn-secondary")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease;
                pointer-events: none;
            `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add ripple animation CSS
  const style = document.createElement("style")
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `
  document.head.appendChild(style)
})
