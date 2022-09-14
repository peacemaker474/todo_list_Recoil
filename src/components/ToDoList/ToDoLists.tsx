import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import CreateToDo from './CreateToDo';
import ToDoList from './ToDoList';
import { categoryState, toDoSelector } from "../../atmos/atmos";
import CategoryLists from "../Category/CategoryLists";
import CreateCategory from "../Category/CreateCategory";

const ToDoListsWrapper = styled.section`

`;

const ToDoListsTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 3rem;
`;

const Lists = styled.ul`
    width: 80%;
    margin: 0 auto;
`;

function ToDoLists() {
    const toDoLists = useRecoilValue(toDoSelector);
    const currentCategory = useRecoilValue(categoryState);

    return (
        <ToDoListsWrapper>
            <ToDoListsTitle> My {currentCategory} List </ToDoListsTitle>
            <CategoryLists />
            <CreateCategory />
            <hr />
            <CreateToDo />
            <Lists>
                {toDoLists && toDoLists?.map((toDo) => (
                    <ToDoList key={toDo.id} {...toDo} />
                ))}
            </Lists>
        </ToDoListsWrapper>
    );
}

export default ToDoLists;