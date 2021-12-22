export default class Temperature
{
    create(entity) {
        this._recordedAt = entity.recordedAt;
        this._averageTemp = parseFloat(entity.averageTemp) || null;
        this._averageTempUncertainty = parseFloat(entity.averageTempUncertainty) || null;
        this._country = entity.country;
        this._state = entity.state || null;
        return self;
    }

    createList(entityList)
    {
        let list = [];
        entityList.forEach( entity => {
           list.push(this.create(entity));
        });
        return list;
    }

    get recordedAt()
    {
        return this._recordedAt;
    }
    set recordedAt(value)
    {
        this._recordedAt = value;
    }

    get averageTemp()
    {
        return this._averageTemp;
    }
    set averageTemp(value)
    {
        this._averageTemp = value;
    }

    get averageTempUncertainty()
    {
        return this._averageTempUncertainty;
    }
    set averageTempUncertainty(value)
    {
        this._averageTempUncertainty = value;
    }

    get country()
    {
        return this._country;
    }
    set country(value)
    {
        this._country = value;
    }

    get state()
    {
        return this._state;
    }
    set state(value)
    {
        this._state = value;
    }
}
