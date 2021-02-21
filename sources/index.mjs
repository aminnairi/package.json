import "./index.css";

import {getElementById, on, setAttribute, reset, focus, click, createElement, appendTo} from "./dom.mjs";
import {objectPropertySet, objectEmpty, objectLean} from "./object.mjs";
import {copy} from "./clipboard.mjs";
import {removeTrailingLeadingSpaces, toList} from "./string.mjs";

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
    workspaces: [],
    directories: {
        lib: "",
        bin: "",
        man: "",
        doc: "",
        example: "",
        test: ""
    }
};

createElement("link")
    .andThen(setAttribute("href", "./index.css"))
    .andThen(setAttribute("rel", "stylesheet"))
    .andThen(appendTo(document.head))
    .whenError(console.error);

window.addEventListener("load", () => {
    getElementById("code", document)
        .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
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
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .andThen(() => getElementById("name", document))
                .andThen(focus)
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("copy", document)
        .andThen(on("click", () => {
            copy(JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)).then(() => {
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
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["name"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("description", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["description"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("version", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["version"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authorname", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "name"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authorurl", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "url"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authoremail", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "email"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("keywords", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["keywords"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("homepage", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["homepage"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bugsurl", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bugs", "url"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bugsemail", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bugs", "email"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))

    getElementById("license", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["license"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("fundingtype", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["funding", "type"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("fundingurl", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["funding", "url"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("files", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["files"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("main", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["main"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("types", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["types"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("browser", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["browser"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bin", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bin"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manname", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "name"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manversion", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "version"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("mandescription", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "description"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manmain", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "main"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manman", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["man", "man"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositorytype", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "type"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositoryurl", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "url"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositorydirectory", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "directory"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("enginesnode", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["engines", "node"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("enginesnpm", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["engines", "npm"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("operatingsystems", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["os"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("centralprocessingunits", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["cpu"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("publishconfigregistry", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["publishConfig", "registry"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("workspaces", document)
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["workspaces"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesbin", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "bin"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directorieslib", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "lib"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesman", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "man"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesdoc", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "doc"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesexample", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "example"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriestest", document)
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "test"]))
                .andThen(() => getElementById("code", document))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);
});