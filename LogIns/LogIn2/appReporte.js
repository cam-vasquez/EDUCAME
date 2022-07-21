$(document).ready(function () {
    $('select').change(function () {
        if ($(this).val() == 'action') {
            $("#btnEnviar").prop('disabled', true);
            $("select").prop('disabled', false);
            $("#year").prop('disabled', false);
            $("#mes").prop('disabled', false);

        } else {
            $("#btnEnviar").prop('disabled', false);
            $("select").not(this).prop('disabled', true);
            $("#year").not(this).prop('disabled', false);
            $("#mes").not(this).prop('disabled', false);

        }
    });
});