// $(function () {
//     $('#btnSignUp').click(function () {
//         $.ajax({
//             url: '/signup',
//             data: $('form').serialize(),
//             type: 'POST',
//             success: function (response) {
//                 console.log(response);
//             },
//             error: function (error) {
//                 console.log(error);
//             }
//         });
//     });
// });

$(function () {
    $('#btnSignin').click(function () {
        $.ajax({
            url: '/signin',
            data: $('form').serialize(),
            type: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

$(function () {
    $('#btnSignout').click(function () {
        $.ajax({
            url: '/logout',
            data: $('form').serialize(),
            type: 'POST',
            success: function (response) {
                location.reload();
                alert("successful")
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

// $editDialog.load(str, null, function() {
//     $("textarea", $editDialog).each(function() {
//       $(this).ckeditor();
//     });
// });