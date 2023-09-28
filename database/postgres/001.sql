CREATE TABLE Recipes (
    id SERIAL PRIMARY KEY,
    cookInstructions VARCHAR(255)[],
    cookTime VARCHAR(255),
    creatorUid VARCHAR(255),
    dateUpdated FLOAT,
    description VARCHAR(255),
    displayName VARCHAR(255),
    imageUrl VARCHAR(255),
    ingredients VARCHAR(255)[],
    prepInstructions VARCHAR(255)[],
    prepTime VARCHAR(255),
    recipeName VARCHAR(255),
    sourceType VARCHAR(255),
    sourceUrl VARCHAR(255)
)