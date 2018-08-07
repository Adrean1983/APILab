"use strict";
$(document).ready(() => {
        
    $.get(`https://www.reddit.com/r/aww.json`).then((data) => {
        $.each(data.data.children, function (index, post) {
            if ( index > 0 && index <= 10) {               
            $(".posts").append(`
            <section class="post">
            <p class="blurb">${post.data.title}<p>
            <img src="${post.data.thumbnail}"></img>
            <a href="${post.data.url}">Link</a>
            </section>
            `);
            }
        });
    });    
});   