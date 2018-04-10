function SimpleFormWithButton(request, response)
{
   if ( request.getMethod() == 'GET' )
   {
       var form = nlapiCreateForm('Simple Form with Button');
 
       var script = "alert('Hello World')";
                
       form.addButton('custombutton', 'Click Me', script);
 
       response.writePage( form );
   }
   else
       dumpResponse(request,response);
}