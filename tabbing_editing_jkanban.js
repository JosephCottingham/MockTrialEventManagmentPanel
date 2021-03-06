"use strict";

// Class definition

var KTKanbanBoardDemo = function () {
    // Private functions
    var all_teams_kanban = function () {
        var kanban = new jKanban({
            element: '#kanban_all',
            gutter: '0',
            widthBoard: '250px',
            boards: [{
                'id': '_inprocess',
                'title': 'All Teams',
                'item': [{
                        'title': '<span class="font-weight-bold">You can drag me too</span>'
                    },
                    {
                        'title': '<span class="font-weight-bold">Buy Milk</span>'
                    }
                ]
            }]
        });
    }

    var grouping_teams_kanban = function () {
        var kanban = new jKanban({
            element: '#kanban_grouping',
            gutter: '0',
            widthBoard: '250px',
            boards: [{
                'id': '0',
                'title': 'Group 1',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '1',
                'title': 'Group 2',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '2',
                'title': 'Group 3',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '3',
                'title': 'Group 4',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '4',
                'title': 'Group 5',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '5',
                'title': 'Group 6',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '6',
                'title': 'Group 7',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, {
                'id': '7',
                'title': 'Group 8',
                'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                }]
            }, ]
        });
    }

    var _demo3 = function () {
        var kanban = new jKanban({
            element: '#kt_kanban_3',
            gutter: '0',
            widthBoard: '250px',
            click: function (el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-primary',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'My Task Test',
                            'class': 'primary'
                        },
                        {
                            'title': 'Buy Milk',
                            'class': 'primary'
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-warning',
                    'item': [{
                            'title': 'Do Something!',
                            'class': 'warning'
                        },
                        {
                            'title': 'Run?',
                            'class': 'warning'
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'All right',
                            'class': 'success'
                        },
                        {
                            'title': 'Ok!',
                            'class': 'success'
                        }
                    ]
                },
                {
                    'id': '_notes',
                    'title': 'Notes',
                    'class': 'light-danger',
                    'item': [{
                            'title': 'Warning Task',
                            'class': 'danger'
                        },
                        {
                            'title': 'Do not enter',
                            'class': 'danger'
                        }
                    ]
                }
            ]
        });
    }

    var _demo4 = function () {
        var kanban = new jKanban({
            element: '#kanban_all',
            gutter: '0',
            click: function (el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_backlog',
                    'title': 'Backlog',
                    'class': 'light-dark',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>
                        	            <span class="label label-inline label-light-success font-weight-bold">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <span class="symbol-label font-size-h4">A.D</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Finance</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Pending</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-danger',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <img alt="Pic" src="assets/media/users/300_16.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Server Setup</span>
                        	            <span class="label label-inline label-light-dark font-weight-bold">Completed</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <img alt="Pic" src="assets/media/users/300_15.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Report Generation</span>
                        	            <span class="label label-inline label-light-warning font-weight-bold">Due</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                            	         <img alt="Pic" src="assets/media/users/300_24.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Marketing</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-info mr-3">
                        	            <span class="symbol-label font-size-h4">A.P</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Finance</span>
                        	            <span class="label label-inline label-light-primary font-weight-bold">Done</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <img alt="Pic" src="assets/media/users/300_11.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>
                        	            <span class="label label-inline label-light-success font-weight-bold">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success mr-3">
                        	            <img alt="Pic" src="assets/media/users/300_20.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Product Team</span>
                        	            <span class="label label-inline label-light-danger font-weight-bold">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_deploy',
                    'title': 'Deploy',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-warning mr-3">
                        	            <span class="symbol-label font-size-h4">D.L</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">SEO Optimization</span>
                        	            <span class="label label-inline label-light-success font-weight-bold">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-danger mr-3">
                        	            <span class="symbol-label font-size-h4">E.K</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 font-weight-bold mb-1">Requirement Study</span>
                        	            <span class="label label-inline label-light-warning font-weight-bold">Scheduled</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                }
            ]
        });

        var toDoButton = document.getElementById('addToDo');
        toDoButton.addEventListener('click', function () {
            kanban.addElement(
                '_todo', {
                    'title': `
                        <div class="d-flex align-items-center">
                            <div class="symbol symbol-light-primary mr-3">
                                <img alt="Pic" src="assets/media/users/300_14.jpg" />
                            </div>
                            <div class="d-flex flex-column align-items-start">
                                <span class="text-dark-50 font-weight-bold mb-1">Requirement Study</span>
                                <span class="label label-inline label-light-success font-weight-bold">Scheduled</span>
                            </div>
                        </div>
                    `
                }
            );
        });

        var addBoardDefault = document.getElementById('addDefault');
        addBoardDefault.addEventListener('click', function () {
            kanban.addBoards(
                [{
                    'id': '_default',
                    'title': 'New Board',
                    'class': 'primary-light',
                    'item': [{
                        'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success mr-3">
                                        <img alt="Pic" src="assets/media/users/300_13.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                        <span class="text-dark-50 font-weight-bold mb-1">Payment Modules</span>
                                        <span class="label label-inline label-light-primary font-weight-bold">In development</span>
                                    </div>
                                </div>
                        `
                    }, {
                        'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success mr-3">
                                        <img alt="Pic" src="assets/media/users/300_12.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                    <span class="text-dark-50 font-weight-bold mb-1">New Project</span>
                                    <span class="label label-inline label-light-danger font-weight-bold">Pending</span>
                                </div>
                            </div>
                        `
                    }]
                }]
            )
        });

        var removeBoard = document.getElementById('removeBoard');
        removeBoard.addEventListener('click', function () {
            kanban.removeBoard('_done');
        });
    }

    // Public functions
    return {
        init: function () {
            all_teams_kanban();
            grouping_teams_kanban();
        }
    };
}();

jQuery(document).ready(function () {
    KTKanbanBoardDemo.init();
});