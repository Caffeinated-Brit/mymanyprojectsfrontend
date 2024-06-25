import React, { useState } from 'react';

const RecipeSearch: React.FC = () => {
    const app_id = "de51f843";
    const app_key = "84bb841216e814ee469387eecb7dff5c";

    const [recipes, setRecipes] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');

    const searchRecipes = async () => {
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${app_id}&app_key=${app_key}`;
        let response = await fetch(url);
        let data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f8f8' }}>
            <div id="searchContainer" style={{ textAlign: 'center', margin: '20px' }}>
                <label htmlFor="search" style={{ fontSize: '18px', marginRight: '10px' }}></label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px', border: '1px solid #ccc' }}
                />
                <button
                    onClick={searchRecipes}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4caf50', color: '#fff', border: 'none' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4caf50'}
                >
                    Search Recipes
                </button>
            </div>

            <div id="recipesContainer" style={{ margin: '20px' }}>
                {recipes.map((recipeData, index) => {
                    const { label, image, calories, totalTime, yield: recipeYield, dietLabels, healthLabels, ingredientLines } = recipeData.recipe;
                    return (
                        <div key={index} className="recipe-item">
                            <img src={image} alt={label} />
                            <h3>{label}</h3>
                            <p><strong>Calories:</strong> {Math.round(calories)}</p>
                            <p><strong>Total Time:</strong> {totalTime} minutes</p>
                            <p><strong>Yield:</strong> {recipeYield}</p>
                            <p><strong>Diet Labels:</strong> {dietLabels.join(', ')}</p>
                            <p><strong>Health Labels:</strong> {healthLabels.join(', ')}</p>
                            <h3>Ingredients:</h3>
                            <ul>
                                {ingredientLines.map((ingredient: string, index: number) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <br />
                            <br />
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecipeSearch;