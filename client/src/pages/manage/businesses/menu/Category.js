import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import EditCategory from "./EditCategory";
import StyledDeleteIcon from "../../../../styles/StyledDeleteIcon";

const Category = ({ category, menuManagerState }) => {

  const { selectedCategory, setSelectedCategory } = menuManagerState;

  return (
    <ListItemButton sx={{ margin: 0, padding: "3px 0 3px 3px" }}
      selected={category.id === selectedCategory}
      onClick={() => setSelectedCategory(category.id)}
    >
      <ListItem
        sx={{ margin: 0, padding: 0 }}
        secondaryAction={
          <>
            <EditCategory menuManagerState={menuManagerState} category={category} />
            <IconButton edge="end" aria-label="delete">
              <StyledDeleteIcon />
            </IconButton>          
          </>

        }
      >
        <ListItemText
          primary={category.category}
        />
      </ListItem>      
    </ListItemButton>

    
  );

};

export default Category;