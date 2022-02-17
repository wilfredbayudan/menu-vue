import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import { primaryColor } from "./colorList";

const StyledLoadingButton = styled(LoadingButton)`
  color: #000000;
  width: 100%;
  background-color: ${primaryColor};
  &:hover {
    background-color: #ff7d3d;
  }
`;

export default StyledLoadingButton;