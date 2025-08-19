---
title: Creations
---

I'm a career programming teacher, and I've been creating and developing as
a hobby for as long as I can remember.

## Right Now

Current listening: <div class="lastfm"></div>

Also check out my [Stats.fm page](https://stats.fm/almondjoycam)!

Reading _Gender and Power_ by [Raewyn Connell](http://www.raewynconnell.net/) (1987)

## Contact Me

<form id="contact-form">
    <!-- To simplify the tutorial, the value is static. -->
    <input type="hidden" name="time" value="Mar 10 2025 08:46">
    <label>Name</label>
    <input type="text" name="name" required>
    <label>Email</label>
    <input type="email" name="email" required>
    <label>Subject</label>
    <input type="text" name="title" required>
    <label>Message</label>
    <textarea name="message" required></textarea>
    <input type="submit" value="Send">
</form>

<script src="http://code.jquery.com/jquery-git2.min.js"></script>
<script src="http://melchor629.github.io/Last.fm-Web-Widget/lastSongs.comp.js"></script>
<script>
$(".lastfm").lastSongs("almondjoyy", "4a981abf9feb892aecb0973198165ff6")
    .colorDeFondo(255, 92, 92, 0.9)
    .colorDeLaCabecera(191, 222, 244, 1)
    .colorDelTitulo(0, 0, 0, 1)
    .colorDelArtista(0, 100, 0, 1)
    .colorDelAlbum(123, 123, 123, 1)
    .colorDeCancion(228, 226, 165, 1)
    .setWidth(680)
    .applyStyle();
</script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "2Pz88fG-Os7ZCJzro",
        });
    })();
</script>
<script type="text/javascript">
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        });
    }
</script>
