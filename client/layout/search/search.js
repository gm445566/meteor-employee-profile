import { Template } from 'meteor/templating'
import { Employees } from '../../../lib/employee.js';
import './search.html';


Employees = new Mongo.Collection("messages");

if (Meteor.isClient) {
    Template.search.events({
        "submit #search": function(e) {
            e.preventDefault();
            Session.set("searchValue", $("#searchValue").val());
        }
    });

    Template.search.helpers({
        messages: function() {
            Meteor.subscribe("search", Session.get("searchValue"));
            if (Session.get("searchValue")) {
                return Employees.find({}, {
                    sort: [
                        ["name", "desc"]
                    ]
                });
            } else {
                return Employees.find({});
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        Employees._ensureIndex({
            "value": "text"
        });

    });

    Meteor.publish("search", function(searchValue) {
        if (!searchValue) {
            return Employees.find({});
        }
        console.log("Searching for ", searchValue);
        var cursor = Employees.find({ $text: { $search: searchValue } }, {
            /*
             * `fields` is where we can add MongoDB projections. Here we're causing
             * each document published to include a property named `score`, which
             * contains the document's search rank, a numerical value, with more
             * relevant documents having a higher score.
             */
            fields: {
                score: { $meta: "textScore" }
            },
            /*
             * This indicates that we wish the publication to be sorted by the
             * `score` property specified in the projection fields above.
             */
            sort: {
                score: { $meta: "textScore" }
            }
        });
        return cursor;
    });
}