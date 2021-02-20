import "./index.css";

import {getElementById, on, setAttribute, reset, focus, click} from "./dom.mjs";
import {objectPropertySet, objectEmpty, objectLean} from "./object.mjs";
import {copy} from "./clipboard.mjs";

const packageJson = {
    name: "",
    description: "",
    version: "",
    author: {name: "", url: "", email: ""},
    keywords: [],
    homepage: "",
    bugs: {url: "", email: ""},
    license: "",
    funding: {type: "", url: ""},
    files: [],
    main: "",
    browser: "",
    bin: "",
    man: {name: "", version: "", description: "", main: "", man: []},
    repository: {type: "", url: "", directory: ""},
    engines: {node: "", npm: ""},
    os: [],
    cpu: [],
    publishConfig: {registry: ""},
    workspaces: []
};

getElementById("code", document)
    .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
    .whenError(console.error);

getElementById("form", document)
    .andThen(on("submit", event => event.preventDefault()))
    .whenError(console.error);

getElementById("refresh", document)
    .andThen(on("click", () => {
        getElementById("form", document)
            .andThen(reset)
            .andThen(() => objectEmpty(packageJson))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .andThen(() => getElementById("name", document))
            .andThen(focus)
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("copy", document)
    .andThen(on("click", () => {
        copy(JSON.stringify(objectLean(packageJson), null, 2)).then(() => {
            alert("Copied!");
        }).catch(({message}) => {
            alert("Failed to copy");
            console.error(message);
        });
    }))
    .whenError(console.error);

getElementById("body", document)
    .andThen(on("keydown", ({altKey, code}) => {
        if (altKey) {
            if (code === "KeyC") {
                getElementById("copy", document)
                    .andThen(click)
                    .whenError(console.error);
            } else if (code === "KeyR") {
                getElementById("refresh", document)
                    .andThen(click)
                    .whenError(console.error);
            } else if (code === "KeyI") {
                getElementById("issue", document)
                    .andThen(click)
                    .whenError(console.error);
            }
        }
    }))
    .whenError(console.error);

getElementById("name", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["name"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("description", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["description"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("version", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["version"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("authorname", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["author", "name"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("authorurl", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["author", "url"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("authoremail", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["author", "email"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("keywords", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["keywords"], value.split(",").map(keyword => keyword.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("homepage", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["homepage"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("bugsurl", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["bugs", "url"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("bugsemail", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["bugs", "email"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))

getElementById("license", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["license"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("fundingtype", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["funding", "type"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("fundingurl", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["funding", "url"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("files", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["files"], value.split(",").map(file => file.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("main", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["main"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("browser", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["browser"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("bin", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["bin"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("manname", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["man", "name"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("manversion", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["man", "version"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("mandescription", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["man", "description"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("manmain", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["man", "main"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("manman", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["man", "man"], value.split(",").map(man => man.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("repositorytype", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["repository", "type"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("repositoryurl", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["repository", "url"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("repositorydirectory", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["repository", "directory"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("enginesnode", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["engines", "node"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("enginesnpm", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["engines", "npm"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("operatingsystems", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["os"], value.split(",").map(os => os.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("centralprocessingunits", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["cpu"], value.split(",").map(centralprocessingunit => centralprocessingunit.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("publishconfigregistry", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["publishConfig", "registry"], value.trim())
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);

getElementById("workspaces", document)
    .andThen(on("input", ({target: {value}}) => {
        return objectPropertySet(packageJson, ["workspaces"], value.split(",").map(workspace => workspace.trim()).filter(Boolean))
            .andThen(() => getElementById("code", document))
            .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson), null, 2)))
            .whenError(console.error);
    }))
    .whenError(console.error);