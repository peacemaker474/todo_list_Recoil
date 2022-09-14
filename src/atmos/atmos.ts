import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const localToDo = recoilPersist({
    key: "myTos"
}).persistAtom;

const localCategory = recoilPersist({
    key: "myCategories"
}).persistAtom;

export let categories: string[] = ["TO_DO", "DOING", "DONE"];

export interface IAtomToDo {
    text: string;
    id: number;
    category: string;
}

export const toggleAddCategory = atom<boolean>({
    key: "visibleCategory",
    default: false,
})

export const categoryState = atom<string>({
    key: "category",
    default: categories[0]
})

export const categoriesState = atom<string[]>({
    key: "categories",
    default: categories,
    effects_UNSTABLE: [localCategory]
})

export const toDoState = atom<IAtomToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [localToDo],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const categorys = get(categoryState);
        return toDos.filter((item) => item.category === categorys);
    }
})