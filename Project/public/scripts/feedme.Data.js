/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

FeedMe.prototype.addMeal = function(data) {
  var collection = firebase.firestore().collection('meals');
  return collection.add(data);
};

FeedMe.prototype.getAllMeals = function(render) {
   var query = firebase.firestore()
   .collection('meals')
   .orderBy('name', 'desc')
   .limit(50);
   this.getDocumentsInQuery(query, render);
  
};

FeedMe.prototype.getDocumentsInQuery = function(query, render) {
   query.onSnapshot(function(snapshot) {
   if (!snapshot.size) return render();

   snapshot.docChanges.forEach(function(change) {
     if (change.type === 'added') {
       render(change.doc);
     }
   });
 });
};

FeedMe.prototype.getMeal = function(id) {
  FeedMe.prototype.getRestaurant = function(id) {
  return firebase.firestore().collection('meals').doc(id).get();
};
};

FeedMe.prototype.getFilteredMeals = function(filters, render) {
  /*
    TODO: Retrieve filtered list of Meals
  */
};

FeedMe.prototype.addRating = function(MealID, rating) {
  /*
    TODO: Retrieve add a rating to a Meal
  */
};