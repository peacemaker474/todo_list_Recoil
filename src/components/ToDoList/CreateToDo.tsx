import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import { categoryState, toDoState } from '../../atmos/atmos';

interface IToDo {
    toDo: string;
}

const Form = styled.form`
    width: 80%;
    height: 30px;
    margin: 2rem auto;
    border: 1px solid rgba(127, 127, 127, .5);
    border-radius: 5px;

    input, button {
        box-sizing: border-box;
    }
`;

const Input = styled.input`
    all: unset;
    width: 80%;
    height: 100%;
    padding-left: 5px;
`;

const Button = styled.button`
    all: unset;
    width: 20%;
    height: 100%;
    text-align: center;
    border-left: 1px solid rgba(127, 127, 127, .5);
    cursor: pointer;
`;

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IToDo>();

    const handleValid = ({ toDo }: IToDo) => {
        setToDos(oldToDos => [{
            text: toDo,
            id: Date.now(),
            category,
        }, ...oldToDos]);
        setValue("toDo", "");
    }

    return (
        <Form onSubmit={handleSubmit(handleValid)}>
            <Input
                placeholder='Add a todolists'
                {
                ...register("toDo", {
                    required: "Please write a To Do"
                })
                }
            />
            <Button> Add </Button>
        </Form>
    );
}

export default CreateToDo;