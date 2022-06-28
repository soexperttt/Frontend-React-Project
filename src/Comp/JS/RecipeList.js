import "../css/RecipeList.css";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";


const RecipeList = ({ recipe }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showIngredients = () => {
    handleClickOpen(true);
  };

  return (
    <>
      <div className="recipeList-main">
        <div className="content">
          <img
            className="recipeList-image"
            src={recipe["recipe"]["image"]}
            alt={recipe["recipe"]["label"]}
          />
          <button
            onClick={showIngredients}
            type="button"
            className="btn btn-success "
          >
            Show Recipe
          </button>
          <p className="recipeList-p">{recipe["recipe"]["label"]}</p>
          <p className="recipeList-p">
            meal Type: {recipe["recipe"]["mealType"]}
          </p>
          <p className="recipeList-p">
            calories: {recipe["recipe"]["calories"]}
          </p>
          <p className="recipeList-p">
            dishType: {recipe["recipe"]["dishType"]}
          </p>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"The ingredients of the recipe: "}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {recipe["recipe"]["ingredientLines"].map((ingredient) => {
                  return <ul>{ingredient}</ul>;
                })}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
