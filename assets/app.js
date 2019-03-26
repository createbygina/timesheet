


$("#submitbutton").on("click", function(){
    var newDiv = $("<div class='newDiv'>");
    var name = $("<div class='name'>");
    var role = $("<div class='role'>");
    var date = $("<div class='date'>");
    var rate = $("<div class='rate'>");
    $(name).val("#input0");
    $(role).val("#input1");
    $(date).val("#input2");
    $(rate).val("#input3");
    $("#appendHere").append(newDiv);
    $(".newDiv").append(name);
    $(".newDiv").append(role);
    $(".newDiv").append(date);
    $(".newDiv").append(rate);
})
