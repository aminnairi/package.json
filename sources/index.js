import "./css/index.css";

import {getElementById, on, setAttribute, reset, focus, click, createElement, appendTo} from "./javascript/dom.js";
import {objectPropertySet, objectEmpty, objectLean} from "./javascript/object.js";
import {copy} from "./javascript/clipboard.js";
import {removeTrailingLeadingSpaces, toList} from "./javascript/string.js";

const packageJson = {
    author: {name: "", url: "", email: ""},
    bin: "",
    browser: "",
    bugs: {url: "", email: ""},
    cpu: [],
    description: "",
    directories: {
        bin: "",
        doc: "",
        example: "",
        lib: "",
        man: "",
        test: ""
    },
    engines: {
        node: "",
        npm: ""
    },
    files: [],
    funding: {
        type: "",
        url: ""
    },
    homepage: "",
    keywords: [],
    license: "",
    main: "",
    man: {
        description: "",
        main: "",
        man: [],
        name: "",
        version: ""
    },
    name: "",
    os: [],
    publishConfig: {
        registry: ""
    },
    repository: {
        directory: "",
        type: "",
        url: ""
    },
    types: "",
    version: "",
    workspaces: []
};

createElement("link")
    .andThen(setAttribute("href", "./css/index.css"))
    .andThen(setAttribute("rel", "stylesheet"))
    .andThen(appendTo(document.head))
    .whenError(console.error);

window.addEventListener("load", () => {
    getElementById("code")
        .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
        .whenError(console.error);

    getElementById("form")
        .andThen(on("submit", event => event.preventDefault()))
        .whenError(console.error);

    getElementById("refresh")
        .andThen(on("click", () => {
            getElementById("form")
                .andThen(reset)
                .andThen(() => objectEmpty(packageJson))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .andThen(() => getElementById("name"))
                .andThen(focus)
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("copy")
        .andThen(on("click", () => {
            copy(JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)).then(() => {
                alert("Copied!");
            }).catch(({message}) => {
                alert("Failed to copy");
                console.error(message);
            });
        }))
        .whenError(console.error);

    getElementById("body")
        .andThen(on("keydown", ({altKey, code}) => {
            if (altKey) {
                if (code === "KeyC") {
                    getElementById("copy")
                        .andThen(click)
                        .whenError(console.error);
                } else if (code === "KeyR") {
                    getElementById("refresh")
                        .andThen(click)
                        .whenError(console.error);
                } else if (code === "KeyI") {
                    getElementById("issue")
                        .andThen(click)
                        .whenError(console.error);
                }
            }
        }))
        .whenError(console.error);

    getElementById("name")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["name"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("description")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["description"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("version")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["version"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authorname")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "name"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authorurl")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "url"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("authoremail")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["author", "email"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("keywords")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["keywords"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("homepage")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["homepage"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bugsurl")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bugs", "url"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bugsemail")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bugs", "email"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))

    getElementById("license")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["license"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("fundingtype")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["funding", "type"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("fundingurl")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["funding", "url"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("files")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["files"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("main")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["main"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("types")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["types"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("browser")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["browser"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("bin")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["bin"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manname")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "name"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manversion")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "version"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("mandescription")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "description"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manmain")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["man", "main"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("manman")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["man", "man"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositorytype")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "type"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositoryurl")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "url"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("repositorydirectory")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["repository", "directory"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("enginesnode")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["engines", "node"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("enginesnpm")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["engines", "npm"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("operatingsystems")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["os"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("centralprocessingunits")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["cpu"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("publishconfigregistry")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["publishConfig", "registry"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("workspaces")
        .andThen(on("input", ({target: {value}}) => {
            return toList(value)
                .andThen(objectPropertySet(packageJson, ["workspaces"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesbin")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "bin"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directorieslib")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "lib"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesman")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "man"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesdoc")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "doc"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriesexample")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "example"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);

    getElementById("directoriestest")
        .andThen(on("input", ({target: {value}}) => {
            return removeTrailingLeadingSpaces(value)
                .andThen(objectPropertySet(packageJson, ["directories", "test"]))
                .andThen(() => getElementById("code"))
                .andThen(setAttribute("innerText", JSON.stringify(objectLean(packageJson).withDefault({}), null, 2)))
                .whenError(console.error);
        }))
        .whenError(console.error);
});