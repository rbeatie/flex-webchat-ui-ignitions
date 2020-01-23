import styled from "@emotion/styled";

const ButtonStyles = `
  & > button {
   display: flex;
   padding:0.5em 3em;
   border:0.16em solid #FFFFFF;
   margin:0 0.3em 0.3em 0;
   box-sizing: border-box;
   text-decoration:none;
   text-transform:uppercase;
   font-family:'Roboto',sans-serif;
   font-weight:400;
   color: grey;
   text-align:center;
   transition: all 0.15s;
  }

  & > button:hover {
   color: hotpink;
   border-color:#DDDDDD;
  }

  & > :active {
   color:;
   border-color:#BBBBBB;
  }
  
  @media all and (max-width:30em) {
   & > button {
    display: flex;
    margin:0.4em auto;
   }
  }
`;

const StyledButton = styled.div`${ButtonStyles}`;

export default StyledButton;
