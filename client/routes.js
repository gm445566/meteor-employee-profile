import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../client/layout/body/body.js';
import '../client/layout/list/list.js';

import './component/employeeEn.js';
import './component/employeeEdit.js';
import './component/employeeShow.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('dynamic_template', { main: 'list' });
    },
});

FlowRouter.route('/employee', {
    name: 'App.employee',
    action() {
        BlazeLayout.render('dynamic_template', { main: 'employee_form' });
    },
});

FlowRouter.route('/employee/:_id', {
    name: 'Employee.show',
    action(params) {
        BlazeLayout.render('dynamic_template', { main: 'employee_show' });
    },
});

FlowRouter.route('/employee-edit/:_id', {
    name: 'Employee.edit',
    action(params) {
        BlazeLayout.render('dynamic_template', { main: 'employee_edit' });
    },
});