import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { primaryColor } from "./colorList";

const StyledLoadingButton = styled(LoadingButton)`
  color: #000000;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  &:hover {
    color: ${primaryColor};
  }
  @media (min-width: 768px) {
    width: ${props => props.fullWidth ? "100%" : "auto"};
  }
`;

export default StyledLoadingButton;