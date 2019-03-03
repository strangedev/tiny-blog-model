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

    static unMarshal({_id, title, content, author, date, tags}) {
        return new BlogEntry(
            _id,
            title,
            content,
            author,
            date,
            tags
        );
    }

    marshal() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            author: this.author,
            date: this.date,
            tags: this.tags
        }
    }
}

export{
    BlogEntry
};