const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: 1.2,
    wheelMultiplier: 0.9,
    lerp: 0.08,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const navigationBar = document.getElementById("navbar");
if (navigationBar) {
    lenis.on("scroll", (e) => {
        if (e.scroll > 40) {
            navigationBar.classList.add("scrolled");
        } else {
            navigationBar.classList.remove("scrolled");
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href.startsWith("#")) return;
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            lenis.scrollTo(target, {
                offset: -20,
                duration: 2,
                easing: (t) => 1 - Math.pow(1 - t, 3)
            });

        }

        if (navContent) {
            navContent.classList.remove("active");
        }
    });
});

const menuToggle = document.getElementById("menuToggle");
const navContent = document.getElementById("navContent");

if (menuToggle && navContent) {
    menuToggle.addEventListener("click", () => {
        navContent.classList.toggle("active");
    });
}

const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                alert("✅ Message sent successfully!");
                form.reset();
            } else {
                alert("❌ Failed to send message.");
            }

        } catch (err) {
            alert("❌ Network Error.");
        }
    });
}

const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const slider = document.querySelector(".switch");

if (monthly && yearly && slider) {

    function moveSlider(index) {
        const width = monthly.offsetWidth;
        slider.style.transform = `translateX(${width * index}px)`;
    }

    monthly.addEventListener("click", () => {
        moveSlider(0);
        monthly.classList.add("active");
        yearly.classList.remove("active");
    });

    yearly.addEventListener("click", () => {
        moveSlider(1);
        yearly.classList.add("active");
        monthly.classList.remove("active");
    });

    window.addEventListener("resize", () => {
        if (yearly.classList.contains("active")) {
            moveSlider(1);
        } else {
            moveSlider(0);
        }
    });
}

const purchaseModal = document.getElementById("purchaseModal");
const successModal = document.getElementById("successModal");
const closeModal = document.querySelector(".closeModal");
const closeSuccess = document.getElementById("closeSuccess");
const purchaseButtons = document.querySelectorAll(".cardBtn");
const purchaseForm = document.getElementById("purchaseForm");
const selectedPlan = document.getElementById("selectedPlan");
const successName = document.getElementById("successName");
const paymentMethod = document.getElementById("paymentMethod");
const paymentDate = document.getElementById("paymentDate");
const productName = document.getElementById("productName");
const invoiceNumber = document.getElementById("invoiceNumber");

purchaseButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        purchaseModal.style.display = "flex";
        lenis.stop();
        selectedPlan.value =
            `${btn.dataset.plan} | ${btn.dataset.price}`;

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {
        purchaseModal.style.display = "none";
        lenis.start();
    });
}

if (purchaseForm) {
    purchaseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        purchaseModal.style.display = "none";
        successModal.style.display = "flex";

        const customerName =
            document.getElementById("customerName").value;

        const bank =
            document.getElementById("bank").value;

        successName.innerHTML =
            `Thank You, ${customerName}!`;

        paymentMethod.innerHTML =
            bank;

        paymentDate.innerHTML =
            new Date().toLocaleString();

        productName.innerHTML =
            selectedPlan.value;

        if (invoiceNumber) {
            invoiceNumber.innerHTML = createInvoice();
        }
    });
}

if (closeSuccess) {
    closeSuccess.addEventListener("click", () => {
        successModal.style.display = "none";
        purchaseForm.reset();
        lenis.start();
    });
}

window.addEventListener("click", (e) => {
    if (e.target === purchaseModal) {
        purchaseModal.style.display = "none";
        lenis.start();
    }

    if (e.target === successModal) {
        successModal.style.display = "none";
        lenis.start();
    }
});

function createInvoice() {
    const date = new Date();
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    const random =
        Math.floor(Math.random() * 9000) + 1000;
    return `INV-${y}${m}${d}-${random}`;
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

const navLinks = document.querySelectorAll(".navContent a");

function updateActiveNav() {
    let current = sections[0].id;
    const scrollPos = lenis.scroll + 150;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
}

lenis.on("scroll", updateActiveNav);
updateActiveNav();