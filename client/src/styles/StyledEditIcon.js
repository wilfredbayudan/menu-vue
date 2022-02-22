import EditIcon from '@mui/icons-material/Edit';
import styled from "styled-components";
import { primaryColor } from "../styles/colorList";

const StyledEditIcon = styled(EditIcon)`
  &:hover {
    color: ${primaryColor};
  }
`;

export default StyledEditIcon;