// index.jsx
#include "./modules/compositionCreator.jsx"
#include "./utilities/logger.jsx"

function main() {
    try {
        // Use a module to create a new composition
        var comp = CompositionCreator.createComp("My New Composition", 1920, 1080, 30, 10);
        
        // Utility function for logging
        Logger.log("Composition created successfully: " + comp.name);
    } catch (error) {
        Logger.error("Failed to create composition: " + error.message);
    }
}

main();
