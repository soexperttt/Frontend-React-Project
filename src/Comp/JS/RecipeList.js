import "../css/Recipe.css";
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
      <div className="recipeList-main-recipe">
        <div className="content-recipe">
          <div className="card">
            <img
              className="recipeList-image-recipe"
              src={recipe["recipe"]["image"]}
              alt={recipe["recipe"]["label"]}
            />
            <button
              className="button-87"
              role="button"
              onClick={showIngredients}
              type="button"
            >
              Show Recipe
            </button>

            <p className="recipeList-p-recipe">{recipe["recipe"]["label"]}</p>
            <p className="recipeList-p-recipe">
              meal Type: {recipe["recipe"]["mealType"]}
            </p>

            <p className="recipeList-p-recipe">
              dish Type: {recipe["recipe"]["dishType"]}
            </p>
          </div>
          <Dialog className="dialog-recipe" open={open} onClose={handleClose}>
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
