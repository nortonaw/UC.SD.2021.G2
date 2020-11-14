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
      this.fillerStatement = "Center Court Menu: ";
      this.sectionOneName = "Homeplates";
      this.sectionTwoName = "Gridiron";
      this.sectionThreeName = "Kettle Classics";

      //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Chicken Club";
      this.sectionOne_rowOne_Calories = "600";
      this.sectionOne_rowOne_Description = "Chicken, lettuce, tomato, mayo";
      this.sectionOne_rowOne_Attributes = "Vegan";
      this.sectionOne_rowTwo_Name = "Pizza";
      this.sectionOne_rowTwo_Calories = "120";
      this.sectionOne_rowTwo_Description = "Tomato sauce, cheese, boneless bread";
      this.sectionOne_rowTwo_Attributes = "Low card";
      this.sectionOne_rowThree_Name = "Cheese Sticks";
      this.sectionOne_rowThree_Calories = "150";
      this.sectionOne_rowThree_Description = "Deep fried beer battered stainless steel cheese";
      this.sectionOne_rowThree_Attributes = "High-Protein";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Ceasar Salad";
      this.sectionTwo_rowOne_Calories = "69";
      this.sectionTwo_rowOne_Description = "Someone, who's been dead for at least 70 years, made this salad";
      this.sectionTwo_rowOne_Attributes = "Vegetarian";
      this.sectionTwo_rowTwo_Name = "Vietnamise Pho";
      this.sectionTwo_rowTwo_Calories = "90";
      this.sectionTwo_rowTwo_Description = "What the Pho-k is this?";
      this.sectionTwo_rowTwo_Attributes = "Whole Grain";
      this.sectionTwo_rowThree_Name = "French Onion Soup";
      this.sectionTwo_rowThree_Calories = "130";
      this.sectionTwo_rowThree_Description = "Onions, but with a french accent";
      this.sectionTwo_rowThree_Attributes = "Vegan";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Pancakes";
      this.sectionThree_rowOne_Calories = "120";
      this.sectionThree_rowOne_Description = "Bacon pancakes makin bacon pancakes";
      this.sectionThree_rowOne_Attributes = "Whole Grain";
      this.sectionThree_rowTwo_Name = "Belgium Waffles";
      this.sectionThree_rowTwo_Calories = "160";
      this.sectionThree_rowTwo_Description = "Like normal waffles but smaller and more expensive";
      this.sectionThree_rowTwo_Attributes = "Whole Grain";
      this.sectionThree_rowThree_Name = "French Toast";
      this.sectionThree_rowThree_Calories = "210";
      this.sectionThree_rowThree_Description = "Bread, Milk, Eggs. If you think about it, it's kinda healthy.";
      this.sectionThree_rowThree_Attributes = "Low Carb";
    }
    else if (id == 2) {
      this.fillerStatement = "Market Pointe Menu: ";
      this.sectionOneName = "Awc Station";
      this.sectionTwoName = "Cafe Roma";
      this.sectionThreeName = "Cincy Grill";
      
            //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Pasta Marinara";
      this.sectionOne_rowOne_Calories = "340";
      this.sectionOne_rowOne_Description = "Timeless classic that appeals to anyone";
      this.sectionOne_rowOne_Attributes = "Low Carb";
      this.sectionOne_rowTwo_Name = "Lasagna";
      this.sectionOne_rowTwo_Calories = "460";
      this.sectionOne_rowTwo_Description = "Lasagna is just a pasta sandwich, change my mind";
      this.sectionOne_rowTwo_Attributes = "Low card";
      this.sectionOne_rowThree_Name = "Baked Ziti";
      this.sectionOne_rowThree_Calories = "270";
      this.sectionOne_rowThree_Description = "Ziti that just finished smoking a Joint";
      this.sectionOne_rowThree_Attributes = "HIGH Carb";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Burgers";
      this.sectionTwo_rowOne_Calories = "180";
      this.sectionTwo_rowOne_Description = "Ron Swanson approved";
      this.sectionTwo_rowOne_Attributes = "Vegan";
      this.sectionTwo_rowTwo_Name = "Sirloin Steak";
      this.sectionTwo_rowTwo_Calories = "210";
      this.sectionTwo_rowTwo_Description = "The only steak officially knighted by the queen of England";
      this.sectionTwo_rowTwo_Attributes = "High Protein";
      this.sectionTwo_rowThree_Name = "Pork Roast";
      this.sectionTwo_rowThree_Calories = "140";
      this.sectionTwo_rowThree_Description = "You know, as a kid I hated this. Still do.";
      this.sectionTwo_rowThree_Attributes = "Whole Grain";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Cereal";
      this.sectionThree_rowOne_Calories = "70";
      this.sectionThree_rowOne_Description = "Sugar, but with great marketing";
      this.sectionThree_rowOne_Attributes = "Whole Grain";
      this.sectionThree_rowTwo_Name = "Eggs Benedict";
      this.sectionThree_rowTwo_Calories = "100";
      this.sectionThree_rowTwo_Description = "Napolean Himself came up with this";
      this.sectionThree_rowTwo_Attributes = "High Protein";
      this.sectionThree_rowThree_Name = "Toast";
      this.sectionThree_rowThree_Calories = "60";
      this.sectionThree_rowThree_Description = "Bread but baked a second time";
      this.sectionThree_rowThree_Attributes = "Low Carb";
    }
    else if (id == 3) {
      this.fillerStatement = "On The Green Menu: "
      this.sectionOneName = "Deli";
      this.sectionTwoName = "Entree";
      this.sectionThreeName = "Exhibition";
      
      //Insert Data
      //SECTION ONE
      this.sectionOne_rowOne_Name = "Ham and Cheese";
      this.sectionOne_rowOne_Calories = "250";
      this.sectionOne_rowOne_Description = "Ham and Cheese, it's literally in the name. Why do you need a description?";
      this.sectionOne_rowOne_Attributes = "Low Carb";
      this.sectionOne_rowTwo_Name = "Bottled Water";
      this.sectionOne_rowTwo_Calories = "10";
      this.sectionOne_rowTwo_Description = "Capitalism in its purest form";
      this.sectionOne_rowTwo_Attributes = "Technically Low Carb";
      this.sectionOne_rowThree_Name = "Croissant";
      this.sectionOne_rowThree_Calories = "70";
      this.sectionOne_rowThree_Description = "Um excuse me, are you going to finsih that CROISSANT";
      this.sectionOne_rowThree_Attributes = "High Fat";

      //SECTION TWO
      this.sectionTwo_rowOne_Name = "Burritos";
      this.sectionTwo_rowOne_Calories = "180";
      this.sectionTwo_rowOne_Description = "Like taco bell, but better";
      this.sectionTwo_rowOne_Attributes = "Vegan";
      this.sectionTwo_rowTwo_Name = "Tacos";
      this.sectionTwo_rowTwo_Calories = "180";
      this.sectionTwo_rowTwo_Description = "The absolute worsst item at chipotle. Don't @ me";
      this.sectionTwo_rowTwo_Attributes = "Not worth";
      this.sectionTwo_rowThree_Name = "Carne Asada";
      this.sectionTwo_rowThree_Calories = "140";
      this.sectionTwo_rowThree_Description = "Either the best thing on the menu, or terribly dry";
      this.sectionTwo_rowThree_Attributes = "Hit or miss";

      //SECTION THREE
      this.sectionThree_rowOne_Name = "Hot Dogs";
      this.sectionThree_rowOne_Calories = "80";
      this.sectionThree_rowOne_Description = "A glizzy!!?";
      this.sectionThree_rowOne_Attributes = "Whole Grain";
      this.sectionThree_rowTwo_Name = "Nachos";
      this.sectionThree_rowTwo_Calories = "150";
      this.sectionThree_rowTwo_Description = "ayyo those are Nacho Nachos!";
      this.sectionThree_rowTwo_Attributes = "High Carb";
      this.sectionThree_rowThree_Name = "Beer";
      this.sectionThree_rowThree_Calories = "140";
      this.sectionThree_rowThree_Description = "The official drink of dads";
      this.sectionThree_rowThree_Attributes = "Low Carb";
    }
    else {
      this.fillerStatement = "SELECT A FOOD COURT"
    }
  }

}
