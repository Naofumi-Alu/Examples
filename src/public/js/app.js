$(function(){
    
    //send a data for  table
    $('#getInformation').on('click',function(){
        
        $.ajax({
            url:'/information',
            success:function(res){
                let tbody = $('tbody');
                tbody.html('');
                res.forEach(res =>{
                    
                    tbody.append(`
                        <tr>
                            <td class="id">
                                ${res.id}
                            </td>
                            
                            
                            <td>
                                <input type="text" class="name form-control" value="${res.name}" />
                            </td>
                                
                            <td>
                                <input type="text" class="email form-control" value="${res.email}" />
                            </td>
                            
                            <td>
                                <input type="text" class="message form-control" value="${res.message}">
                            </td>
                        
                            
                            <td>
                                <div class="form-group">
                                    <div class="d-grid gap-2">
                                        <button class="delete-button btn btn-primary">Delete</button>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="d-grid gap-2">
                                        <button class="update-button"> Update </button>
                                    </div>
                                </div>
                                
                            </td>
                        </tr>
                        
                        `);
                });
            }
            
        })
        
    });
    
    //Get data from Form for POST Method
    
    $('#informationForm').on('submit',function(e){
       
       //data from POST
       let newName = $('#newName');
       let newEmail = $('#newEmail');
       let newMessage = $('#newMessage');
       
       
        $.ajax({
            url:'information',
            method:'POST',
            data:{
                name:newName.val(),
                email:newEmail.val(),
                message:newMessage.val()
            },
            success:function(res){
                
                console.log(res.body);
                $('#getInformation').click();
                
            }
        }); 
    });
    
    //
});