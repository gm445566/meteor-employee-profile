import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Employees = new Mongo.Collection('employees');

Meteor.methods({
    'employees.insert' (empAll) {
        // Make sure the user is logged in before inserting a task
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Employees.insert({
            empid: empAll.empid,
            name: empAll.name,
            age: empAll.age,
            telephone: empAll.telephone,
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
    },
    'employees.remove' (paramId) {
        check(paramId, String);
        Employees.remove(paramId);
    },
    'employees.update' (paramId, empAll) {

        check(paramId, String);
        Employees.update(paramId, {
            $set: {
                empid: empAll.empid,
                name: empAll.name,
                age: empAll.age,
                telephone: empAll.telephone
            }
        });
    },
});