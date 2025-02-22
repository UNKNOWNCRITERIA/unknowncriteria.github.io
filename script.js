document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        fetch("server/contact-handler.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        });
    });
});
