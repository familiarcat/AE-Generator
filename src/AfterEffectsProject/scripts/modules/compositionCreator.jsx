// modules/compositionCreator.jsx
var CompositionCreator = (function () {
  function createComp(name, width, height, frameRate, duration) {
    var compFolder = app.project.rootFolder.items.addFolder('Compositions');
    var comp = app.project.items.addComp(
      name,
      width,
      height,
      1,
      duration,
      frameRate
    );
    comp.parentFolder = compFolder;
    return comp;
  }

  return {
    createComp: createComp
  };
})();
