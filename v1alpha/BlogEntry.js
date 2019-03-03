class BlogEntry {
    constructor(id, title, content, author, date, tags) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._author = author;
        this._date = date;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }

    get author() {
        return this._author;
    }

    get date() {
        return this._date;
    }

    get tags() {
        return this._tags;
    }

    static unMarshal(body) {
        return new BlogEntry(
            body.title,
            body.content,
            body.author,
            body.date,
            body.tags
        );
    }

    marshal() {
        return {
            title: this.title,
            content: this.content,
            author: this.author,
            date: this.date,
            tags: this.tags
        }
    }
}

export default BlogEntry;