function postToGoogle() {
    // alert("Thanks");
    // return false;
                var name = $("#name").val();
                var email = $("#email").val();
                var message = $("#message").val();
        
        if(name == ""){
          alert('Please write your goodname.');
          document.getElementById("name").focus();
          return false;
        }
        if(email == ""){
          alert('Plese write down your email address so that we can contact you if needed.');
          document.getElementById("email").focus();
          return false;
        }
        if(message == "")
        {
          alert('No message?? \n\n Please write down your message');
          document.getElementById("message").focus();
          return false;
        }
        $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSc3SuQnHKpUqyme1qmu-NLFXkHLgOL6vMo-vFKcRigIFvKcOg/formResponse?",
          data: {"entry.1309152733": name, "entry.1267741741": email, "entry.381574307": message},
               // $.ajax({
                 //   url: "https://docs.google.com/forms/d/e/1FAIpQLSfcP68DI5fjDGF49mPw1hdODF0WaK1vFfP0IA3XzkceA9TaOw/formResponse?",
          //data: {"entry.": name, "entry.": email, "entry.": message},


             // data: {"entry.630525043": field1, "entry.707736545": field2, "entry.1786621969": field3, "entry.393785043": field4, "entry.393785043": height, "entry.1736541269":field7, "entry.1397015985":address},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {
                alert("Thanks for your message. \n\n May god bless you.");
                document.getElementById("myForm").reset();
            }
                });
        return false;
            }

