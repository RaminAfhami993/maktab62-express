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
            console.log(response);
        },
        error: function(err) {
            console.log(err);
        }
    });
};