export default class Tweet
{
    create(entity) {
        this._id = entity.id;
        this._link = entity.link;
        this._content = entity.content;
        this._publishedAt = entity.publishedAt;
        this._retweets = entity.retweets;
        this._mentions = entity.mentions;
        this._hashtags = entity.hashtags;
        return self;
    }

    createList(entityList) {
        let list = [];
        entityList.forEach( entity => {
           list.push(this.create(entity));
        });
        return list;
    }

    get id()
    {
        return this._id;
    }
    set id(value)
    {
        this._id = value;
    }

    get link()
    {
        return this._link;
    }
    set link(value)
    {
        this._link = value;
    }

    get content()
    {
        return this._content;
    }
    set content(value)
    {
        this._content = value;
    }

    get publishedAt()
    {
        return this._publishedAt;
    }
    set publishedAt(value)
    {
        this._publishedAt = value;
    }

    get retweets()
    {
        return this._retweets;
    }
    set retweets(value)
    {
        this._retweets = value;
    }

    get mentions()
    {
        return this._mentions;
    }
    set mentions(value)
    {
        this._mentions = value;
    }

    get hashtags()
    {
        return this._hashtags;
    }
    set hashtags(value)
    {
        this._hashtags = value;
    }
}