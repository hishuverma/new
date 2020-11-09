$(function() {
    $("form[name='login']").validate({
      rules: {
        
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          
        }
      },
       messages: {
        email: "Please enter a valid email address",
       
        password: {
          required: "Please enter password",
         
        }
        
      },
      submitHandler: function(form) {
          console.log($("form[name='login']"));
        $.post('http://localhost:3000/api/auth/login', {email : $("form[name='login']")[0].email.value, password : $("form[name='login']")[0].password.value }, function(data){
            console.log(data);
        })
      }
    });
  });
  


$(function() {

$("form[name='registration']").validate({
rules: {
firstname: "required",
lastname: "required",
email: {
 required: true,
 email: true
},
address: "required",
password: {
 required: true,
 minlength: 5
}
},

messages: {
firstname: "Please enter your firstname",
lastname: "Please enter your lastname",
address: "Please enter your address",
password: {
 required: "Please provide a password",
 minlength: "Your password must be at least 5 characters long"
},
email: "Please enter a valid email address"
},

submitHandler: function(form) {
   
 $.post('http://localhost:3000/api/auth/register', {
  firstname:  $("form[name='registration']")[0].firstname.value,
  lastname: $("form[name='registration']")[0].lastname.value,
  address:  $("form[name='registration']")[0].address.value,
  password:  $("form[name='registration']")[0].password.value,
  email: $("form[name='registration']")[0].email.value
}, function(data){
    console.log(data);
})
}
});
});