# Nectar Take Home - Jeff Suitor

This is a NextJS app using react boostrap. This project uses server-side rendering as well as the React Context API.

To start the app:

npm install
npm run dev

To login select the appropriate vet clinic. Enter in any email (must contain an @ and no special chars) and password. There is no saving our authentication. Note, that if you refresh the page due to the lack of user memory you will have to return to the login page and login once again. In futures version authentication and remembering the user would prevent this from being an issue.

You will be dropped into the home screen for the current date. There is a floating action button in the bottom right but appointments can also be booked using the add appointment buttons. 

The desired date is selected in the top bar using the date picker. In the future the top bar would be better refined. There additional information such as date, time, phone and email of the clinic was included as this information is relevant to the staff when they have to answer and email or book someone over the phone therefore it should always be present. In the case of mobile, these additional details collapse into a hamburger menu. Currently there are appointments on April 11th.

Vets are displayed at the top of the page. Veterinary technicians were not included as they are not usually associated directly with an appointment. Instead as a vet requires them they may involve them but I've personally never seen it where technicians are directly linked to appointments in the system although some specialists may have their preferred staff for certain procedures but that tends to be more informal. 

The appointment booking screen contains all the necessary information for the POST request. In reality much of this info is redundant and I would rather retrieve it from the client history. Additionally, while not part of this outline, in future revisions I would like to add a step indicator on the bottom of each appointment card. This would contain 4 icons representing booked, arrived, in progress, and paid. I would also like to include additional warnings and information such as a person is running late or someone who has an outstanding bill.

Additional changes including adding a line corresponding to the current time which when on the current date would move down the page. I would also show previous appointments as completed by possibly adding a grey overlay unless the appointment as not been paid, etc. 

The clinics list is rendered server-side and the appointments are pre-rendered. I don't like how I am currently getting all appointments and they are organized by ID of creation and not date. It would be nice to be able to specify a date and retrieve all appointments for that day thereby reducing payload size. Pre-rendering this information would also need to be done securely as right now due to the lack of security anyone on the system could migrate to a clinic address and retrieve their appointment info. 

Also, I think that there is information that would be more important to capture in these cards. For example medications which may conflict with various treatments from a medical perspective. Additionally, products / services that produce high margins such as tick/flea medication and vaccines should be included in the card and clearly visible to the vets and staff as this income is easy to achieve but if the product doesn't notify them this income will be missed.

Please let me know if you have any issues with the take home or any questions, comments, concerns. If you would like to book a meeting to go over it please let me know.

jeffreysuitor@gmail.com
705-507-8930

Cheers,
Jeff