define(function(require){

  // load the css ourselves
  require('plugins/test_kibana_pluginz/test_kibana_pluginz.less');

  // load controller
  require('plugins/test_kibana_pluginz/test_kibana_pluginz_controller');

  // register provider with visTypes registry
  require('ui/registry/vis_types').register(MetricVisProvider);


  // basic
  function MetricVisProvider(Private){

    // common var
    var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
    var Schemas = Private(require('ui/vis/schemas'));

    // return visType object
    return new TemplateVisType({

      /*
        name, title, description, icon, template define here
        ex) template: require('plugins/test_kibana_pluginz/test_kibana_pluginz.html'), ...
      */

      // param init
      params: {
        defaults:{
          /*
            init params info
            font size, width, height and other options.......
          */
        },
        editor: require('plugins/test_kibana_pluginz/test_kibana_pluginz_params.html')
      },
      // schemas init
      schemas: new Schemas([
        /*
          define use schemas
          group, name, title, min, max, defaults:[{schema: '' , type: ''}]
        */
      ])
    });

  }

  return MetricVisProvider;
});
