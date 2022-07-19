$(document).ready(function () {
    $('select').change(function () {
        if ($(this).val() == 'action') {
            $("#btnLogIn").prop('disabled', true);
            $("select").prop('disabled', false);
        } else {
            $("#btnLogIn").prop('disabled', false);
            $("select").not(this).prop('disabled', true);
        }
    });
});