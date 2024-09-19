const arr = [1,2,999,56,"Mithun",1234,"Pw"];
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "string"){
        console.log("First string is found:")
        console.log("Value:",arr[i]);
        process.exit();
    }
    
}