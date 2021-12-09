function sendData() {
    const name = $('#name').val();
    const job = $('#job').val();
    $.ajax({
        url: '/user/info',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify({
            name,
            job
        }),
        success: function(response) {
            $('.text-danger, .text-success').text("")

            if (response.success) {
                $('.text-success').html('true')
            } else {
                $('.text-danger').html('false')
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
};