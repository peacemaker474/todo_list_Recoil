import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoriesState, IAtomToDo, toDoState } from "../../atmos/atmos";

const List = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
    border-radius: 10px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const Text = styled.span`
    width: 95%;
    font-size: 1rem;
    margin: 0 auto;
`;

const ButtonBox = styled.div`
    width: 95%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    margin-top: 10px;
    gap: 5px;
`;

const Button = styled.button`
    all: unset;
    border-radius: 3px;
    height: 1.7rem;
    padding: 0.3rem 0.5rem;
    background-color: rgba(127, 127, 127, .1);
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 5px;
    }
`;

const DeleteBtn = styled(Button)`
    color: red;
`;

function ToDoList({ id, category, text }: IAtomToDo) {
    const categories = useRecoilValue(categoriesState);
    const setToDos = useSetRecoilState(toDoState);

    const handleChangeCategory = (value: IAtomToDo["category"]) => () => {
        setToDos((oldTodos) => {
            const newToDo = oldTodos.map((item) => item.id === id ? { ...item, category: value } : item);
            return newToDo;
        })
    }

    const handleDeleteToDo = (deleteId: number) => () => {
        setToDos((oldTodos) => {
            const deleteToDo = oldTodos.filter((item) => item.id !== deleteId);
            return deleteToDo;
        })
    }

    return (
        <List>
            <Text> {text} </Text>
            <ButtonBox>
                {
                    Object.values(categories).map((item) => (
                        item !== category ?
                            <Button key={item} onClick={handleChangeCategory(item)}> {item} </Button>
                            : null
                    ))
                }
                <DeleteBtn onClick={handleDeleteToDo(id)}> 삭제 </DeleteBtn>
            </ButtonBox>
        </List>
    );
}

export default ToDoList;