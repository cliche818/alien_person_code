export default class Character {
    _value: string;

    constructor(value: string) {
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    set value(newValue: string) {
        this._value = newValue;
    }
}