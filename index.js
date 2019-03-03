import * as v1alphaBlogEntry from "./v1alpha/BlogEntry/BlogEntry";
import * as v1alphaBlogEntryView from "./v1alpha/BlogEntry/view";
import {getVersion} from "./connector/db";

const v1alpha = {
    model: {
        BlogEntry: v1alphaBlogEntry.BlogEntry
    },
    store: (host, port) => ({
        getDb: () => getVersion("v1alpha", host, port),
        BlogEntry: {
            view: {
                byTag: v1alphaBlogEntryView.byTag(host, port),
                newest: v1alphaBlogEntryView.newest(host, port)
            },
            mutation: {
                insert: () => {},
                update: () => {},
                remove: () => {}
            }
        },
        Tag: {
            view: {
                all: () => {}
            }
        }
    })
};

export {
    v1alpha
}