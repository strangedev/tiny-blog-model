import v1alphaBlogEntry from "./v1alpha/BlogEntry";
import {getVersion} from "./connector/db";

const v1alpha = {
    getDb: (host, port) => getVersion("v1alpha", host, port),
    BlogEntry: v1alphaBlogEntry
};

export {
    v1alpha
}