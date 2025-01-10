//call back - function inside another function inside the argument

function submitform(submit,db){
    var [dbname,comment]=db;
    console.log("DB name is",dbname,comment);
    console.log(submit);
}
function database(){
    dbname="sece";
    return [dbname,"data stored sucessfully"];
}
submitform("form submitted sucesfully",database());
