// scripts/modules/module1.jsx
var CompositionCreator = (function () {
  function findExistingComp(name) {
    var project = app.project;
    for (var i = 1; i <= project.numItems; i++) {
      if (
        project.item(i).name === name &&
        project.item(i) instanceof CompItem
      ) {
        return project.item(i);
      }
    }
    return null;
  }

  function createComp(name, width, height, frameRate, duration) {
    var existingComp = findExistingComp(name);
    if (existingComp) {
      return existingComp;
    }

    var compFolder = ensureCompFolder();
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

  function ensureCompFolder() {
    var compFolderName = 'compositions';
    var items = app.project.rootFolder.items;
    for (var i = 1; i <= items.length; i++) {
      if (items[i].name === compFolderName && items[i] instanceof FolderItem) {
        return items[i];
      }
    }
    return app.project.rootFolder.items.addFolder(compFolderName);
  }

  return {
    createComp: createComp
  };
})();
