// ajax request is same as in django but the difference is that
// in javascript we have to define "csrftoken" in different way

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajax({
    url : "",
    type : "POST",
    headers: { "X-CSRFToken": getCookie('csrftoken') },
    data : {
        'somedata' : '',
    },

    // If success
    success: function(data, status, xhr) {
          alert('pass');
    },

    error: function(xhr, status, error) {
        alert('fail');
    },
});