;(function ($, window, undefined) {
  'use strict';

  var pluginName = 'greeter';
  // Place private functions here.

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    /*Default functions
      init: function ()
      destroy: function ()
    ********************************
      Place public functions here. 
    */

    init: function () {
      var el = this.element;
      var opts = this.options;
      var that = this;
      that.bindEvent('World');
    },
    bindEvent: function (message) {
      var el = this.element;
      var opts = this.options;
      var that = this;

      el.on('click', function () {
        alert(opts.message + ' ' + message);
      });
    },
    destroy: function () {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function (options, params) {
    return this.each(function () {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    message: 'Hello',
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]({

    });
  });

}(jQuery, window));