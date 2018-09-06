import './head.html';

Template.head.events({
    'click .brand-logo' (event) {
        FlowRouter.go('/');
    },
    'click .waves-effect' (event) {
        FlowRouter.go('/employee');
    },
});