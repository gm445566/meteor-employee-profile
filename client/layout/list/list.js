import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor';
import { Employees } from '../../../lib/employee.js';
import './list.html';

Template.list.helpers({

    employees() {
        return Employees.find({}, {
            sort: {
                empid: 1
            }
        });
    }
});
Template.list.events({
    'click .show' () {
        FlowRouter.go('Employee.show', this._id);
    },
    'click .delete' () {
        // Employees.remove(this._id);
        // Meteor.call('employees.remove', this._id);

        const id = this._id;

        new Confirmation({
            message: "Are you sure ?",
            title: "Confirmation",
            cancelText: "Cancel",
            okText: "Ok",
            success: false, // whether the button should be green or red
            focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
        }, function(ok) {
            if (ok) {
                Meteor.call('employees.remove', id);
            }
        });
    }
})