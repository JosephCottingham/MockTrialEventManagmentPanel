
// new Sortable(teams_all_list, {
//     group: {
//         name: 'shared',
//         pull: 'clone',
//         put: false // Do not allow items to be put into this list
//     },
//     animation: 150,
//     sort: false // To disable sorting: set sort to false
// });

// new Sortable(example4Right, {
//     group: 'shared',
//     animation: 150
// });
$("#commit_round").click(function(e) {
    Swal.fire({
        title: "Are you sure you wish to commit this rounds groupings?",
        text: "You won\'t be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, commit it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then(function(result) {
        if (result.value) {
            Swal.fire(
                "Commited!",
                "Your rounds groupings have been commited.",
                "success"
            )
            // result.dismiss can be "cancel", "overlay",
            // "close", and "timer"
        } else if (result.dismiss === "cancel") {
            Swal.fire(
                "Cancelled",
                "You may continue editing this rounds groupings.",
                "error"
            )
        }
    });
});

$("#auto_tab").click(function(e) {
    Swal.fire({
        title: "Completing Auto Tab",
        text: "This will take a couple seconds",
        timer: 5000,
        onOpen: function() {
            Swal.showLoading()
        }
    }).then(function(result) {
        if (result.dismiss === "timer") {
            console.log("I was closed by the timer")
        }
    })
});

$("#save_alarm").click(function(e) {
    Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
});

Sortable.create(team_all_list, {
    group : {
        name: 'team_all',
        pull: 'groupings',
        put: 'groupings'
    },
    animation: 150
});

Sortable.create(group_0, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_1, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_2, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_3, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_4, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_5, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_6, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_7, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});

Sortable.create(group_8, {
    group : {
        name: 'groupings',
        pull: ['team_all', 'groupings'],
        put: function (to) {
            console.log("fsadfa");
            console.log(to);
            var numItems = to.el.querySelectorAll(".list-group-item").length;
            console.log(numItems);
            return numItems < 2;
          }
    },
    animation: 150
});