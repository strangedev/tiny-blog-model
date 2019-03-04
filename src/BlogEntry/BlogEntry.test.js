import {BlogEntry} from "./BlogEntry";

test("BlogEntry.marshal", () => {
    let date = Date.now();
    let e = new BlogEntry(0, "t", "c", "a", date, ["tag"]);
    expect(e.marshal()).toEqual({
        id: 0,
        title: "t",
        content: "c",
        author: "a",
        date,
        tags: ["tag"]
    });
});

test("BlogEntry.marshal noId", () => {
    let date = Date.now();
    let e = new BlogEntry(0, "t", "c", "a", date, ["tag"]);
    expect(e.marshal(true)).toEqual({
        id: undefined,
        title: "t",
        content: "c",
        author: "a",
        date,
        tags: ["tag"]
    });
});

test("BlogEntry.unMarshal", () => {
    let date = Date.now();
    let e = {
        id: 0,
        title: "t",
        content: "c",
        author: "a",
        date,
        tags: ["tag"]
    };
    expect(BlogEntry.unMarshal(e)).toEqual(
        new BlogEntry(0, "t", "c", "a", date, ["tag"])
    );
});

test("BlogEntry.unMarshal noId", () => {
    let date = Date.now();
    let e = {
        title: "t",
        content: "c",
        author: "a",
        date,
        tags: ["tag"]
    };
    let blogEntry = BlogEntry.unMarshal(e);
    expect(blogEntry).toEqual(
        new BlogEntry(undefined, "t", "c", "a", date, ["tag"])
    );
    expect(blogEntry.id).toBe(undefined);
});