import { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite, faUtensils } from "@fortawesome/free-solid-svg-icons";

var smallDb = {
  "🍣": "Sushi",
  "🥝": "Kiwi Fruit",
  "🥦": "Broccoli",
  "🥞": "Pancakes",
  "🥓": "Bacon"
};

var foodDb = {
  "🍑": "Peach",
  "🍣": "Sushi",
  "🥝": "Kiwi",
  "🥦": "Broccoli",
  "🥞": "Pancakes",
  "🥓": "Bacon",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🧇": "Waffle",
  "🧀": " Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": " Bowl with Spoon",
  "🥗": " Green Salad",
  "🍿": "Popcorn",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🥮": "Moon Cake",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "☕": "Tea"
};

var dbKeys = Object.keys(smallDb);

export default function App() {
  var [input, setInput] = useState("");

  function onChangeEventHandler() {
    var a = foodDb[event.target.value];
    setInput(a);

    if (foodDb[event.target.value] === undefined) {
      setInput(" not in our CookBook yet");
    } else if (foodDb[event.target.value] === " ") {
      setInput("");
    }
  }

  function onClickHandler(whole_input) {
    var op = foodDb[whole_input];
    setInput(op);
  }

  return (
    <div className="App">
      <h2>
        <FontAwesomeIcon icon={faUtensils} />
        _Food Emoji Search
      </h2>
      <h3>
        {" "}
        <FontAwesomeIcon icon={faCookieBite} />
        _Built for the foodie inside you
      </h3>

      <div>
        <input onChange={onChangeEventHandler} placeholder="Search "></input>
        <ul>
          {dbKeys.map((a) => {
            return (
              <span onClick={() => onClickHandler(a)} key={a}>
                {a}
              </span>
            );
          })}
        </ul>
      </div>
      <div className="output">Item---'{input}'</div>
    </div>
  );
}
