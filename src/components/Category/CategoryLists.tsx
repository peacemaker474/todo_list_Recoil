import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState, categoryState, toggleAddCategory } from "../../atmos/atmos";

const Lists = styled.ul`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    padding: 3rem 0;
    margin: 0 auto;
`;

const List = styled.li`
    height: 30px;
    font-size: 1rem;
    border-radius: 5px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Button = styled.button`
    all: unset;
    width: 100%;
    height: 100%;

    border-radius: 5px;
    line-height: 20px;
    &:hover {
        background-color: rgba(127, 127, 127, .05);
    }

    &:disabled {
        background-color: rgba(127, 127, 127, .1);
        border: 3px solid #A16AE8;
        box-sizing: border-box;
    }
`;

const AddButton = styled(List) <{ activity: boolean }>`
    border: ${({ activity }) => !activity ? "none" : "3px solid #603F8B"};
    background-color: white;
    cursor: pointer;
`;

function CategoryLists() {
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const [isVisible, setIsVisible] = useRecoilState(toggleAddCategory);

    const handleToggleClick = () => {
        setIsVisible(!isVisible);
    }

    const handleCategoryClick = (category: string) => () => {
        setCategory(category);
    }

    return (
        <Lists>
            {categories && categories?.map((item) => (
                <List>
                    <Button onClick={handleCategoryClick(item)} disabled={category === item}> {item} </Button>
                </List>
            ))}
            <AddButton as="button" onClick={handleToggleClick} activity={isVisible}> Add </AddButton>
        </Lists>
    );
}

export default CategoryLists;