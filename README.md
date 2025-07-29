# KittyKafe
A repository to contain the Kitty Kafe website source code.The Kitty Kafe is a mock cafe that offers a place to study, order coffee beans or prepared drinks &amp; desserts, and calm the sense by spending time with a kitty.

## Page List (HTML & CSS for each unless otherwise stated)
**1. Index:** This is the Home Page for the Kitty Kafe site. It includes information about the company and what we offer.

**2. Menu:** The Menu Page provides the user with a description of the prepared espresso drinks and desserts, as well as an image and the price per size.

**3. Order Drinks:** The Order Drinks Page gives the user a form page to fill out the necessary information to place an order for a prepared drink or dessert from our Menu Page.

**4. Order Beans:** The Order Beans Page is another form page for the user to enter their necessary info and selections to place an order. This page is designated for bags of roasted coffee beans rather than menu items. This page includes a JavaScript file called decaf-switcher.js (see "Other Features/Files" section for description).

**5. Recipes:** The Recipes Page is a place for users to view a detailed breakdown of recipes for items from our menu. It describes each item, displays an image, and gives an ingredients & instructions list (including optional ingredients/instructions).

**6. Community:** This is where the Kitty Kafe forums are housed. Users can create posts to share their favorite items and experiences at Kitty Kafe, or share their own recipes for other users to test out.

**7. Locations:** This page lists our locations with a Google Maps link, their respective business hours, an image of the store front, and a section for page redirection (with context description for user) for each location. As of now, there is only 1 location (used Sabbath Coffee Roasters in Clawson, MI rather than using my personal home address). If more locations are added, this "page redirection" section can automatically provide data through the links so that switching to an order page will automatically select the location to order from (selection area to be added to order pages).

  ### Universal Page Features
  **1. Title Area:** Includes the title of the website, an image of my lovely kitties (Charlie & Pim), and a background of coffee beans. Displayed at the top of each page.
  
  **2. Site Navigation Area:** A horizontal list of links to all pages within the Kitty Kafe website. Displayed directly under the Title Area.
  
  **3. Contact & Business Hours Area:** A vertical side section that includes business contact information and business hours (to be added: this information changes  depending on a location selection that would be globally applied for the session).

## Other Features/Files
**1. Images:** The "images" folder holds all images used on the website.

**2. Videos:** The "videos" folder holds all videos used on the website.

**3. decaf-switcher.js:** This file is used on the Order Beans Page. It provides the functionality for switching the view between viewing caffeinated and decaffeinated coffee beans to select for an order.

## Future Changes
1. Provide a backend that interfaces with the order pages so that the user can place real orders that can be sent to an email (or other platform) to be fulfilled.
2. Increase the number of screen size variations so that the website is even more accessible to users using the wide variety of displays available on web-capable devices. Also, the videos should be in multiple sizes, just like the images.
3. Condense both order pages into 1 order page that users can visit to order prepared food and roasted beans.
4. Incorporate Menu Page elements and/or format into the order pages. This would give the user 1 comprehensive page to view menu items (and their info) and order food/beans. This would improve the user experience and reduce the number of pages for the user to navigate. Combined with Future Change #3, there would be a reduction of 2 pages.
5. Create a database to house menu items (including beans), location data, community forum post data, and user data. This would open the door to actual functionality of the Community Page and a sign-in/sign-up page. This database would interface with the web app to enable consistent orders and the ability for the Community Page to no longer be hard-coded. 
