import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

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
            <DeleteCategory menuManagerState={menuManagerState} category={category} />
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