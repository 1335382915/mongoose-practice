(function() {
    var name = $(".name");
    var age = $(".age");
    var _id = $(".id");
    $(".add").on("click", function() {
        $.get("/add.json", {
            name: name.val(),
            age: age.val()
        }, function(res) {
            console.log(res);
            if(res.retCode == 0) {
                window.location.reload();
            }
        })
    })
    $(".getAll").on("click", function() {
        $.get("/getAll.json", {}, function(res) {
            console.log(res);
        })
    })
    $(".deleteAll").on("click", function() {
        $.get("/deleteAll.json", {}, function(res) {
            console.log(res);
            if(res.retCode == 0) {
                window.location.reload()
            }
        })
    })
    $(".update").on("click", function() {
        $.get("/update.json", {
            name: name.val(),
            age: age.val(),
            _id: _id.val()
        }, function(res) {
            console.log(res);
            if(res.retCode == 0) {
                window.location.reload();
            }
        })
    })
    $(".delete").on("click", function() {
        $.get("/delete.json", {
            _id: _id.val()
        }, function(res) {
            console.log(res);

            if(res.retCode == 0) {
                window.location.reload();
            }
        })
    })
    var ul = $("ul");
    $.get("/getAll.json", {}, function(res) {
        if(res.retCode == 0) {
            res.retInfo.map(function(item, index) {
                var li = $("<li>" + item._id + ": " + item.name + ": " + item.age + "</li>");
                li.on("click", function() {
                    $.get("/findById.json", {_id: item._id}, function(res) {
                        console.log(res);
                    })
                })
                ul.append(li);
            })
        }
    })
})()