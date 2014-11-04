var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var plugin = require('plugin');

module.exports = Backbone.View.extend({

  template: require('./template'),

  initialize: function() {
    var underscoreTest = _.last([0,1,2, 'hi mom!']);
    this.render()
  },

  render: function() {

    var $el = $(this.el);
    var variables = {
      description: 'Starter Gulp + Browserify project equipped to handle the following:',
      tools: [
        'Browserify-shim',
        'Browserify / Watchify',
        'BrowserSync',
        'CoffeeScript',
        'Compass',
        'SASS',
        'Handlebars',
        'Image optimization',
        'LiveReload',
        'Non common-js jquery plugin',
        'Npm backbone',
        'Npm jquery',
        'Underscore (included with Backbone)'
      ]
    };

    $el.html(this.template(variables));

    plugin()
  }

});
