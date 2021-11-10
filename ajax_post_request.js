// import <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

$.ajax({
    url : 'url from where the data is to be fetched',
    type : "POST",  //POST or GET
    data : {
        'data' : 'data' , //data to be sent to the backend
        csrfmiddlewaretoken: '{{ csrf_token }}' , //csrf token for django projects

    },

    success : function(response){
        // for successful response fetch data using response['data]
        
    },

    error : function(xhr,errmsg,err) {
        // if not successful
    }
});
