import styled from "styled-components";
import ToDoLists from "../components/ToDoList/ToDoLists";

const MainWrapper = styled.main`
    max-width: 480px;
    padding: 0 3rem;
    margin: 0 auto;
    margin-top: 5rem;
`;

function MainPages() {
    return (
        <MainWrapper>
            <ToDoLists />
        </MainWrapper>
    );
}

export default MainPages;