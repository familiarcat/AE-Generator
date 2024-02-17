// scripts/main.jsx
#include "utilities/helpers.jsx"
#include "modules/module1.jsx"

function main() {
    try {
        var comp = CompositionCreator.createComp("My Awesome Composition", 1920, 1080, 24, 10);
        Helpers.log("Composition created successfully: " + comp.name);
    } catch (e) {
        Helpers.error("An error occurred: " + e.toString());
    }
}
main();
