document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const profilePic = document.getElementById('profile-pic');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    profilePic.addEventListener('mouseover', function () {
        this.src = 'piculit.jpeg';
    });

    profilePic.addEventListener('mouseout', function () {
        this.src = 'pic.jpeg';
    });
});
