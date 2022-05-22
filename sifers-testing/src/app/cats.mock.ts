import { Cat, CatColor, Sex } from "./cat.model";

export const createCats = () => [
    new Cat({
        name: 'Leo',
        age: 2,
        color: CatColor.ORANGE,
        sex: Sex.MALE,
        altered: true,
    }),
    new Cat({
        name: 'Marjorie',
        age: 16,
        color: CatColor.CALICO,
        sex: Sex.FEMALE,
        altered: true,
    }),
    new Cat({
        name: 'Fritz',
        age: 0,
        color: CatColor.TUXEDO,
        sex: Sex.UNKNOWN,
        altered: false,
    }),
    new Cat({
        name: 'Miss Booties',
        age: 5,
        color: CatColor.GREY,
        sex: Sex.FEMALE,
        altered: true,
    }),
    new Cat({
        name: 'Funky Monkey',
        age: 4,
        color: CatColor.TABBY,
        sex: Sex.MALE,
        altered: true,
    })
];

export const createCat = (partial: Partial<Cat> = {}): Cat => ({
    name: 'Bunnymuffins',
    age: 2,
    sex: Sex.MALE,
    altered: true,
    color: CatColor.BLACK,
    ...partial
});