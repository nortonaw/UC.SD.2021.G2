import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining-halls',
  templateUrl: './dining-halls.component.html',
  styleUrls: ['./dining-halls.component.css']
})
export class DiningHallsComponent implements OnInit {

  diningHallId = 0;
  fillerStatement;
  sectionOneName;
  sectionTwoName;
  sectionThreeName;

  //SECTION ONE
  sectionOne_rowOne_Name;
  sectionOne_rowOne_Calories;
  sectionOne_rowOne_Description;
  sectionOne_rowOne_Attributes;
  sectionOne_rowTwo_Name;
  sectionOne_rowTwo_Calories;
  sectionOne_rowTwo_Description;
  sectionOne_rowTwo_Attributes;
  sectionOne_rowThree_Name;
  sectionOne_rowThree_Calories;
  sectionOne_rowThree_Description;
  sectionOne_rowThree_Attributes;

  //SECTION TWO
  sectionTwo_rowOne_Name;
  sectionTwo_rowOne_Calories;
  sectionTwo_rowOne_Description;
  sectionTwo_rowOne_Attributes;
  sectionTwo_rowTwo_Name;
  sectionTwo_rowTwo_Calories;
  sectionTwo_rowTwo_Description;
  sectionTwo_rowTwo_Attributes;
  sectionTwo_rowThree_Name;
  sectionTwo_rowThree_Calories;
  sectionTwo_rowThree_Description;
  sectionTwo_rowThree_Attributes;

  //SECTION THREE
  sectionThree_rowOne_Name;
  sectionThree_rowOne_Calories;
  sectionThree_rowOne_Description;
  sectionThree_rowOne_Attributes;
  sectionThree_rowTwo_Name;
  sectionThree_rowTwo_Calories;
  sectionThree_rowTwo_Description;
  sectionThree_rowTwo_Attributes;
  sectionThree_rowThree_Name;
  sectionThree_rowThree_Calories;
  sectionThree_rowThree_Description;
  sectionThree_rowThree_Attributes;

  constructor() { }

  ngOnInit(): void {
  }

  tableRefresh(id) {
    this.diningHallId = id;
    console.log(this.diningHallId);
    if (id == 1) {
      //Section Name
      this.sectionOneName = "Homeplates";
      this.sectionTwoName = "Gridiron";
      this.sectionThreeName = "Kettle Classics";

      //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Carolina Pork BBQ";
      this.sectionOne_rowOne_Calories = "360";
      this.sectionOne_rowOne_Description = "Fork-tender oven-braised pork in cider vinegar, hot sauce and honey";
      this.sectionOne_rowOne_Attributes = "N/A";
      this.sectionOne_rowTwo_Name = "Brussel Sprouts & Carrots";
      this.sectionOne_rowTwo_Calories = "30";
      this.sectionOne_rowTwo_Description = "Steamed fresh Brussels Sprouts and carrots seasoned with salt and pepper";
      this.sectionOne_rowTwo_Attributes = "Eat Well, Vegan, PF";
      this.sectionOne_rowThree_Name = "Blueberry-Peach Cobbler";
      this.sectionOne_rowThree_Calories = "300";
      this.sectionOne_rowThree_Description = "Warm blueberries and peaches with a brown sugar & cinnamon-spiced crumb topping";
      this.sectionOne_rowThree_Attributes = "Vegetarian";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Grilled Bratwurst";
      this.sectionTwo_rowOne_Calories = "320";
      this.sectionTwo_rowOne_Description = "Savory grilled bratwurst";
      this.sectionTwo_rowOne_Attributes = "N/A";
      this.sectionTwo_rowTwo_Name = "Baked Russet Potato";
      this.sectionTwo_rowTwo_Calories = "140";
      this.sectionTwo_rowTwo_Description = "Oven-roasted russet potato";
      this.sectionTwo_rowTwo_Attributes = "Vegan";
      this.sectionTwo_rowThree_Name = "Applesauce Cake";
      this.sectionTwo_rowThree_Calories = "340";
      this.sectionTwo_rowThree_Description = "Homemade applesauce cake with raisins spiced with cinnamon and nutmeg frosted with vanilla icing";
      this.sectionTwo_rowThree_Attributes = "Vegetarian";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Beef Vegetable Noodle Soup";
      this.sectionThree_rowOne_Calories = "100";
      this.sectionThree_rowOne_Description = "Roasted beef, egg noodles, potatoes and vegetables simmered in a rich beef stock";
      this.sectionThree_rowOne_Attributes = "N/A";
      this.sectionThree_rowTwo_Name = "Sweet Tomato Soup";
      this.sectionThree_rowTwo_Calories = "70";
      this.sectionThree_rowTwo_Description = "A puree of tomatoes, sweet potatoes, onions and vegetable broth";
      this.sectionThree_rowTwo_Attributes = "Vegan";
      this.sectionThree_rowThree_Name = "Roasted Corn Chowder";
      this.sectionThree_rowThree_Calories = "150";
      this.sectionThree_rowThree_Description = "Roasted corn, diced potatoes and onions in a creamy rich soup spiced with herbs and hot pepper sauce";
      this.sectionThree_rowThree_Attributes = "N/A";
    }
    else if (id == 2) {
      this.sectionOneName = "Awc Station";
      this.sectionTwoName = "Cafe Roma";
      this.sectionThreeName = "Cincy Grill";
      
            //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Belgian Waffle";
      this.sectionOne_rowOne_Calories = "260";
      this.sectionOne_rowOne_Description = "Crispy, golden-brown waffle";
      this.sectionOne_rowOne_Attributes = "Vegetarian";
      this.sectionOne_rowTwo_Name = "-";
      this.sectionOne_rowTwo_Calories = "-";
      this.sectionOne_rowTwo_Description = "-";
      this.sectionOne_rowTwo_Attributes = "-";
      this.sectionOne_rowThree_Name = "-";
      this.sectionOne_rowThree_Calories = "-";
      this.sectionOne_rowThree_Description = "-";
      this.sectionOne_rowThree_Attributes = "-";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Caramel Apple Cheesecake Flatbread";
      this.sectionTwo_rowOne_Calories = "530";
      this.sectionTwo_rowOne_Description = "Cheesecake filling, cinnamon-sugar, mozzarella, caramel apple sauce and walnuts on flatbread crust";
      this.sectionTwo_rowOne_Attributes = "Vegetarian";
      this.sectionTwo_rowTwo_Name = "Classic Cheese Pizza";
      this.sectionTwo_rowTwo_Calories = "270";
      this.sectionTwo_rowTwo_Description = "Mozzarella cheese and pizza sauce";
      this.sectionTwo_rowTwo_Attributes = "Vegetarian";
      this.sectionTwo_rowThree_Name = "Caesar Salad";
      this.sectionTwo_rowThree_Calories = "90";
      this.sectionTwo_rowThree_Description = "Crisp Romaine lettuce tossed with seasoned croutons, Parmesan and creamy Caesar dressing";
      this.sectionTwo_rowThree_Attributes = "PF";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Salmon BLT";
      this.sectionThree_rowOne_Calories = "210";
      this.sectionThree_rowOne_Description = "Grilled Montreal-seasoned salmon, bacon, lettuce, tomato and pesto mayo on top of a grilled baguette";
      this.sectionThree_rowOne_Attributes = "N/A";
      this.sectionThree_rowTwo_Name = "Crispy French Fries";
      this.sectionThree_rowTwo_Calories = "150";
      this.sectionThree_rowTwo_Description = "Piping hot crispy French Fries";
      this.sectionThree_rowTwo_Attributes = "N/A";
      this.sectionThree_rowThree_Name = "Chocolate Chip Coconut Bar";
      this.sectionThree_rowThree_Calories = "190";
      this.sectionThree_rowThree_Description = "Crunchy dessert bar with semisweet chocolate chips, coconut and walnuts";
      this.sectionThree_rowThree_Attributes = "Vegetarian";
    }
    else if (id == 3) {
      this.sectionOneName = "Deli";
      this.sectionTwoName = "Entree";
      this.sectionThreeName = "Exhibition";
      
      //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Turkey Sub";
      this.sectionOne_rowOne_Calories = "150";
      this.sectionOne_rowOne_Description = "Turkey breast on hoagie roll with lettuce, tomato, red onion, relish, vinaigrette";
      this.sectionOne_rowOne_Attributes = "Eat Well";
      this.sectionOne_rowTwo_Name = "Spicy Falafel Wrap";
      this.sectionOne_rowTwo_Calories = "520";
      this.sectionOne_rowTwo_Description = "Jalapeno hummus, falafel, pickled red onions and feta cheese with lettuce, tomato and cucumber on a whole grain tortilla";
      this.sectionOne_rowTwo_Attributes = "Vegetarian, PF";
      this.sectionOne_rowThree_Name = "Sugar Cookie";
      this.sectionOne_rowThree_Calories = "120";
      this.sectionOne_rowThree_Description = "Freshly baked soft sugar cookie";
      this.sectionOne_rowThree_Attributes = "Vegetarian";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Roasted Turkey Breast";
      this.sectionTwo_rowOne_Calories = "120";
      this.sectionTwo_rowOne_Description = "Oven-roasted turkey breast";
      this.sectionTwo_rowOne_Attributes = "Eat Well";
      this.sectionTwo_rowTwo_Name = "Creamy Mashed Potatoes";
      this.sectionTwo_rowTwo_Calories = "120";
      this.sectionTwo_rowTwo_Description = "Fresh mashed russet potatoes with fresh green onions";
      this.sectionTwo_rowTwo_Attributes = "Vegetarian";
      this.sectionTwo_rowThree_Name = "White Dinner Roll";
      this.sectionTwo_rowThree_Calories = "110";
      this.sectionTwo_rowThree_Description = "Soft white dinner roll";
      this.sectionTwo_rowThree_Attributes = "N/A";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Grilled Vegetable Quesadilla";
      this.sectionThree_rowOne_Calories = "360";
      this.sectionThree_rowOne_Description = "Crispy tortilla filled with season zucchini, red onions, peppers, roasted carrots and vegan mozzarella and cheddar cheeses";
      this.sectionThree_rowOne_Attributes = "Eat Well, Vegan, PF";
      this.sectionThree_rowTwo_Name = "Steamed Green Peas";
      this.sectionThree_rowTwo_Calories = "70";
      this.sectionThree_rowTwo_Description = "Tender steamed green peas seasoned with garlic and herbs";
      this.sectionThree_rowTwo_Attributes = "Eat Well, Vegan, PF";
      this.sectionThree_rowThree_Name = "Vegan Oatmel Cookie";
      this.sectionThree_rowThree_Calories = "180";
      this.sectionThree_rowThree_Description = "Freshly baked cinnamon-spiced vegan oatmel-raisin cookie";
      this.sectionThree_rowThree_Attributes = "Vegan";
    }
    else {
      this.fillerStatement = "SELECT A FOOD COURT"
    }
  }

}
