var slideIndex = 1;
var imagesArray = ['none',
    'url(img/molino_pan.jpg)',
    'url(img/playa_pan.jpg)',
    'url(img/madrid.jpg)'
];

showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var marker = document.getElementsByClassName("btn-marker");
    var sample = document.getElementsByClassName("btn-sample");

    if (n > imagesArray.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = imagesArray.length
    }
    for (i = 0; i < sample.length; i++) {
        sample[i].className = sample[i].className.replace(" active", "");
    }
    $('#myPage').css('background-image', imagesArray[slideIndex - 1]);
    $('#myPage').css('transition', 'background 1 linear');
    marker[slideIndex - 1].className += " active";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('main-calendar');
var modalImg = document.getElementById("img01");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// <!-- Script to animate links -->
$(document).ready(function() {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            var offsetval = $(hash).offset().top;
            offsetval = offsetval - 49;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: offsetval
            }, 1000, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                    $('.navbar-toggle:visible').click();
        });
    });

});

//<!-- Script to set time left -->    

$(document).ready(function() {
    var end = new Date('06/17/2017 07:00 PM');
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var timer;

    //alert("Document loaded, including graphics and embedded documents (like SVG)");
    var a = document.getElementById("date");

    //get the inner DOM of svg
    var svgDoc = a.contentDocument;

    //get the inner element by id
    var dayline = svgDoc.getElementById("tspan10531");
    var hourline = svgDoc.getElementById("tspantime");

    function showRemaining() {
        var now = new Date;
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            $('#banner').text('EXPIRED!');
            return;
        }
        var days = Math.floor(distance / day);
        var hours = Math.floor((distance % day) / hour);
        var minutes = Math.floor((distance % hour) / minute);
        var seconds = Math.floor((distance % minute) / second);
        var hourText = hours + " h ";
        if (hours < 10) {
            hourText = "0" + hours + " h ";
        }

        dayline.textContent = "Quedan " + days + " días";
        hourline.textContent = hourText + minutes + " m " + seconds + " s";
    }
    timer = setInterval(showRemaining, 1000);
});


$(document).ready(function() {
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("alternate");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 4000); // Change image every 4 seconds
    }
});

/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});