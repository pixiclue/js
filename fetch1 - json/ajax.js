var data = {'pk': form_code};
                    
fetch('/setting/project/',{
         method: 'POST',
         headers: {
             "X-CSRFToken": csrftoken,
             'Content-Type': 'application/json', 
         },
         body: JSON.stringify(data)
})
.then(res => data)
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));