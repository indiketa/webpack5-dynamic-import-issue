
async function dynamic_import(dir, name) {
    if (dir === "a") {
        return import(
                /* webpackChunkName: "a" */
                /* webpackMode: "lazy-once" */
                `./dynamic_a/${name}.js`);
    }
    throw new Error(`${dir} directory not found`);
}

async function main() {
    // Fails at runtime
    // Uncomment code in the module_a2 to get working again (notice: module_a2 is never required)
    let modA1 = await dynamic_import("a", "module_a1");
    modA1.log();
}

main();

