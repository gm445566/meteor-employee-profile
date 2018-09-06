import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating'

import './employeeEn.html';
import { Employees } from '../../lib/employee';

Template.employee_form.events({
    'submit .new-task' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const empid = target.empid.value;
        const name = target.name.value;
        const age = target.age.value;
        const telephone = target.telephone.value;

        const empAll = {
            empid: empid,
            name: name,
            age: age,
            telephone: telephone
        }



        // Insert a task into the collection
        /*  Employees.insert({
             empid,
             name,
             age,
             telephone,
             owner: Meteor.userId(),
             username: Meteor.user().username,
         }); */

        Meteor.call('employees.insert', empAll);


        // Redirect to home page
        FlowRouter.go('/');
    },
});