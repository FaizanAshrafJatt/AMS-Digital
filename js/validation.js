function checkuser() {
    var a = $(".name").val(),
        b = /^[A-Za-z ]+$/.test(a);
    return $(".name").val().length < 3 ? ($("#username_err").html("username length is too short"), !1) : b ? ($("#username_err").html(""), !0) : ($("#username_err").html("username should be a-z ,A-Z only"), !1);
}

function checkmsg() {
    return ($(".msg").val(), $(".msg").val().length < 10) ? ($("#msg_err").html("Message field required"), !1) : ($("#msg_err").html(""), !0);
}

function checkemail() {
    var a = $(".email").val(),
        b = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(a);
    return "" == a ? ($("#email_err").html("required field"), !1) : b ? ($("#email_err").html(""), !0) : ($("#email_err").html("invalid email"), !1);
}

function checkmobile() {
    return $.isNumeric($(".phone").val()) ? (10 != $(".phone").val().length ? ($("#mobile_err").html("10 digit required"), !1) : ($("#mobile_err").html(""), !0)) : ($("#mobile_err").html("only number is allowed"), !1);
}
$(document).ready(function() {
    $(".name").on("input", function() {
            checkuser();
        }),
        $(".email").on("input", function() {
            checkemail();
        }),
        $(".phone").on("input", function() {
            checkmobile();
        }),
        $(".enquiry_btn").click(function() {
            if (checkuser() || checkemail() || checkmobile()) {
                $("#message").html("");
                var a = $(".enquiry-form")[0],
                    b = new FormData(a);
                $.ajax({
                    type: "POST",
                    url: "/enquiry_process.php",
                    data: b,
                    processData: !1,
                    contentType: !1,
                    cache: !1,
                    async: !1,
                    beforeSend: function() {
                        $(".enquiry_btn").append('<div class="spinner-border"></div>'), $(".enquiry_btn").attr("disabled", !0);
                    },
                    success: function(a) {
                        setTimeout(function() {
                            $("#message").html(a), $(".enquiry-form").trigger("reset"), $(".enquiry_btn").html("Submit"), $(".enquiry_btn").attr("disabled", !1);
                        }, 5e3);
                    },
                });
            } else $("#message").html('<div class="alert alert-warning">Please fill all required field</div>');
        });
});