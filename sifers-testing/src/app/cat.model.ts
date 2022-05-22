export class Cat {
    name?: string;
    age?: number;
    color: CatColor;
    altered: boolean;
    sex: Sex;
    constructor({
        name, 
        age, 
        color, 
        altered, 
        sex
    }: Cat = {name: 'Kitty', age: 0, color: CatColor.UNKNOWN, altered: false, sex: Sex.UNKNOWN}) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.altered = altered;
        this.sex = sex;
    }

}

export enum CatColor {
    ORANGE = 'orange',
    TABBY = 'tabby',
    TUXEDO = 'tuxedo',
    GREY = 'grey',
    WHITE = 'white',
    TORTI = 'torti',
    CALICO = 'calico',
    BLACK = 'black',
    OTHER = 'other',
    UNKNOWN = 'unknown',
}

export enum Sex {
    MALE = 'male',
    FEMALE = 'female',
    UNKNOWN = 'unknown',
}