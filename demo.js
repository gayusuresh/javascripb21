function validate()
{
var x=document.myform.username.value;
var y=document.myform.pwd.value;
if(x==null || x=="")
{
    alert("name cannot be blank")
    return false;
}
else if(y.length<6)
{
    alert("password must be atleast 6 character")
    return false;
}
return true;
}