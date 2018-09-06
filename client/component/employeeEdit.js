import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating'

import './employeeEdit.html';
import { Employees } from '../../lib/employee';

Template.employee_edit.helpers({
    employee: () => {
        var id = FlowRouter.getParam('_id');
        return Employees.findOne({
            _id: id
        });
    },
    isShow: true,

});

Template.employee_edit.events({
    'submit' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const emp_data_update = {
            empid: target.empid.value,
            name: target.name.value,
            age: target.age.value,
            telephone: target.telephone.value
        }


        var id = FlowRouter.getParam('_id');


        // Update a employee into the collection
        /* Employees.update(id, {
            $set: { empid: empid, name: name, age: age, telephone: telephone, userId: userId, username: username },
        }); */

        Meteor.call('employees.update', id, emp_data_update)

        // Redirect to home page
        FlowRouter.go('/');
    },
});