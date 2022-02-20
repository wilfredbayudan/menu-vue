import FloatedContent from "../../../styles/FloatedContent";
import PageTitle from "../../../styles/PageTitle";
import ContentNotice from "../../../styles/ContentNotice";
import { useSearchParams } from "react-router-dom";

const ManageBusinessesNew = ({ appState }) => {
  
  const { user } = appState;

  const [searchParams, setSearchParams] = useSearchParams();

  const newUser = searchParams.get("newUser");

  const renderNewUserNotice = () => {
    if (!newUser) return null;
    return (
      <ContentNotice>
        Hey <b>{user.first_name}</b>, welcome to Menu Vue! To get started, let's create a new business.
      </ContentNotice>
    )
  }

  return (
    <FloatedContent fullWidth>
      {renderNewUserNotice()}
      <PageTitle title="Create a Business" />
    </FloatedContent>
  );
};

export default ManageBusinessesNew;