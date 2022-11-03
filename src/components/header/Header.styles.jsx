import styled from "styled-components";


export const Nav = styled.nav`
  background-color: $color-primary;
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(20, [col-start] 1fr [col-end]);
  grid-template-rows: repeat(2, 1fr);
  align-items: end;
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
`;


export const Logo = styled.h2`
  grid-column: col-start 1 / col-end 3;
  display: inline-block;
  
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  color: ${({ theme }) => theme.colors.green.one};
  font-weight: 600;
  justify-self: start;
  align-self: center;
  margin-left: 1rem;
`;


export const ListGrid = styled.ul`
  grid-column: col-start 9 / col-end 15;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
`;


export const List = styled.li`
  text-decoration: none;
  list-style: none;
  color: ${({ theme }) => theme.colors.grey.one};
  transition: all 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.black.one};
    transform: scale(1.125);
  }
`;


export const AuthGrid = styled.div`
  grid-column: col-start 18 / col-end 20;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: end;
  align-items: center;

  margin-right: 1rem;
`;


export const Login = styled.p`
  color: ${({ theme }) => theme.colors.grey.one};
`;


export const SignUp = styled.button`
  display: inline-block;
  width: 8rem;
  height: 4rem;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.colors.white.one};
  background-color: ${({ theme }) => theme.colors.green.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  transition: all 0.2s;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem
      rgba(${({ theme }) => theme.colors.black.three}, 0.2);
    background-color: ${({ theme }) => theme.colors.green.four};
    cursor: pointer;
  }

  :active,
  :focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba($color-tertiary-dark-2, 0.2);
  }
  //
`;

