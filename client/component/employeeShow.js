import {
    Template
} from 'meteor/templating'

import './employeeShow.html';
import {
    Employees
} from '../../lib/employee';


Template.employee_show.helpers({
    employee: () => {
        var id = FlowRouter.getParam('_id');
        return Employees.findOne({
            _id: id
        });
    },
    isShow: true,

});