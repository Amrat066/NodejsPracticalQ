var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"userinfo"
});
con.connect(function(error){
    if(error) throw error;
    con.query("select * from usermaster",function(error,data){
        if(error) throw error;
        console.log(data[0].address);

    });

});