import styled from "styled-components";


export const Header = styled.header`
background-color: #000000;
padding: 30px 0;
width: 100%;
border-bottom: 1px solid #ececec;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 -1px 10px whitesmoke;
`
export const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const SearchForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
width: 500px;
color: black;
font-size: 20px;
`

export const SearchInput = styled.input`
width: inherit;
height: inherit;
padding: 8px;
background-color: inherit;
color: #ececec;
outline: none;
border: none;
border-bottom: 1px solid #ececec;
&::placeholder {
    font-size: 15px;
    color: grey;
}
`

export const SearchButton = styled.button`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
background-color: inherit;
outline: 1px solid white;
`