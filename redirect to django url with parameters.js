// 1 can be any number and act as a parameter
// id is javascript string variable

location.href = "{% url 'detail' 1 %}".replace(/1/, id);