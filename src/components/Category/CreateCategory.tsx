import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState, categoryState, toggleAddCategory } from "../../atmos/atmos";

const Form = styled.form`
    width: 50%;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    height: 100%;
    padding-left: 5px;
    border: 1px solid rgba(127, 127, 127, .5);
    border-radius: 5px;
`;

function CreateCategory() {
    const isVisible = useRecoilValue(toggleAddCategory);
    const [categories, setCategories] = useRecoilState(categoriesState);
    const setCategory = useSetRecoilState(categoryState);
    const { register, handleSubmit, setValue } = useForm();

    const handleAddCategories = ({ newCategory }: any) => {
        if (newCategory) {
            if (categories.includes(newCategory)) {
                alert("같은 이름의 카테고리가 존재합니다. 다시 입력해주세요!");
                setValue("newCategory", "");
                return;
            }
            setCategories([...categories, newCategory]);
            setCategory(newCategory);
            setValue("newCategory", "");
        }
    }

    return (
        <>
            {
                isVisible &&
                <Form onSubmit={handleSubmit(handleAddCategories)}>
                    <Input
                        type="text"
                        placeholder="새로운 카테고리를 추가하세요."
                        {
                        ...register("newCategory")
                        }
                    />
                </Form>
            }
        </>
    );
}

export default CreateCategory;