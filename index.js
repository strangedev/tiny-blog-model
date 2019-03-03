import * as v1alphaBlogEntry from "./v1alpha/BlogEntry/BlogEntry";
import * as v1alphaBlogEntryView from "./v1alpha/BlogEntry/view";
import {getVersion} from "./connector/db";

const v1alpha = (host, port) => ({
    db: getVersion("v1alpha", host, port),
    model: {
        BlogEntry: v1alphaBlogEntry.BlogEntry
    },
    view: {
        BlogEntry: {
            byTag: v1alphaBlogEntryView.byTag(host, port),
            newest: v1alphaBlogEntryView.newest(host, port)
        },
        Tag: {
            all: () => {}
        }
    },
    mutation: {
        BlogEntry: {
            insert: () => {},
            update: () => {},
            remove: () => {}
        }
    }
});

export {
    v1alpha
}