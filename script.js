document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.setAttribute('target', '_blank');
    });

    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
});
