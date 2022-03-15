var titleName;
var thumb;
var content;
var contentTitle;
var ingredients;
var instruct;

window.addEventListener('load', function() {
    titleName = document.getElementById('titleName');
    thumb = document.getElementById('thumb');
    content = document.getElementById('content');
    contentTitle = document.getElementById('contentTitle');
    ingredients = document.getElementById('ingredients');
    instruct = document.getElementById('instructions');

    generateMeal();
})

function generateMeal() {
    $.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function(data) {
        titleName.innerHTML = "";
        thumb.innerHTML = "";
        contentTitle.innerHTML = "";
        ingredients.innerHTML = "";
        instruct.innerHTML = "";

        dataArrKeys = Object.keys(data.meals[0]);
        dataArrVal = Object.values(data.meals[0]);

        //Generate Title div
        var titleText = document.createElement('p');
        var titleTextContent = document.createTextNode("Feeling hungry? Click and get a meal ;)");
        titleText.appendChild(titleTextContent);
        titleText.addEventListener('click', generateMeal, false);
        titleText.id = "titleText";
        titleName.appendChild(titleText);

        var mealName = document.createElement('p');
        var mealNameText = document.createTextNode(data.meals[0].strMeal);
        mealName.appendChild(mealNameText);
        mealName.id = "mealName"
        titleName.appendChild(mealName);

        //Generate Thumb div
        var thumbImg = document.createElement('img');
        thumbImg.src = data.meals[0].strMealThumb;
        thumb.appendChild(thumbImg);

        //Generate contentTitle div
        var category = document.createElement('p');
        var categoryText = document.createTextNode(data.meals[0].strCategory);
        category.appendChild(categoryText);
        category.id = "category";
        contentTitle.appendChild(category);

        var divider = document.createElement('p');
        var dividerText = document.createTextNode(',');
        divider.appendChild(dividerText);
        contentTitle.appendChild(divider);

        var area = document.createElement('p');
        var areaText = document.createTextNode(data.meals[0].strArea);
        area.appendChild(areaText);
        area.id = "area";
        contentTitle.appendChild(area);

        var tags = document.createElement('p');
        var tagsText = document.createTextNode("Tags: " + data.meals[0].strTags);
        tags.appendChild(tagsText);
        tags.id = "tags";
        contentTitle.appendChild(tags);

        //Generate Ingredients div
        var ingTitle = document.createElement('p');
        var ingTitleText = document.createTextNode('Ingredients:');
        ingTitle.appendChild(ingTitleText);
        ingTitle.id = "title";
        ingredients.appendChild(ingTitle);

        for(var i = dataArrKeys.indexOf("strIngredient1"); i < dataArrKeys.indexOf("strIngredient20"); i++) {
            if(dataArrVal[i] != "" && dataArrVal[i] != null) {
                var strValue = dataArrVal[i].charAt(0).toUpperCase() + dataArrVal[i].slice(1);
                var ingList = document.createElement('ul');
                var ingItem = document.createElement('li');
                var ingItemText = document.createTextNode(strValue + ': ' + dataArrVal[i + 20]);
                ingItem.appendChild(ingItemText);
                ingList.appendChild(ingItem);
                ingredients.appendChild(ingList);
            }
        }

        //Generate Instructions div
        var isntTitle = document.createElement('p');
        var isntTitleText = document.createTextNode('Instructions:');
        isntTitle.appendChild(isntTitleText);
        isntTitle.id = "title";
        instruct.appendChild(isntTitle);

        var instructions = document.createElement('p');
        var instructionsText = document.createTextNode(data.meals[0].strInstructions);
        instruct.appendChild(instructionsText);
        instruct.appendChild(instructions);

        var linkVideo = document.createElement('a');
        var linkVideoText = document.createTextNode("Link to video");
        linkVideo.appendChild(linkVideoText);
        linkVideo.href = data.meals[0].strYoutube;
        linkVideo.id = "howTo";
        instruct.appendChild(linkVideo);
    });
}