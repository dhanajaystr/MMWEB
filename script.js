function openForm(plan) {
    document.getElementById("form-popup").style.display = "block";
    document.getElementById("selectedPlan").value = plan;
}

function closeForm() {
    document.getElementById("form-popup").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("I’m calling back!");
    closeForm();
});
