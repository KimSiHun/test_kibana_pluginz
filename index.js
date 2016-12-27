

module.exports = function(kibana)
{
  return new kibana.Plugin({
    uiExports:{
      visTypes: ['plugin/test_kibana_pluginz/test_kibana_pluginz']
    }
  });
}
