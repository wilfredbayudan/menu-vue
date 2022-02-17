import styled from 'styled-components';

const List = styled.ul`
  background-color: #fff3c8;
  border-radius: 3px;
  padding: 8px 3px;
`;

const ListItem = styled.li`
  margin-left: 20px;
`;


const ErrorList = ({ errors }) => {

  const renderErrors = errors.map((error, errorIdx) => {
    return <ListItem key={errorIdx}>{error}</ListItem>
  })

  if (errors.length > 0) {
    return (
      <List>
        {renderErrors}
      </List>
    )
  }

  return null;
}

export default ErrorList;