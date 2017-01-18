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
