# General Assembly Task Manager

Task Manager for General Assembly Student Assignments.

## Instructions:
  
  * Register to join the site. If already a user, then Log in.
  * Click the "New Assignment" button to create assignments.
  * A form will appear where you can add the name, Git Hub link, and notes for the assignment.
  * Once created, the assignment name will appear on the page.
  * You can click on the assignment name to view its details.
  * From the details page, you can click the check box to note that you've completed the assignment.
  * Also from the details page, you can click the link that will redirect you to the assignment's Git Hub page.
  * You can Edit the assignment details by clicking the "Edit" button.
  * Or you can Delete the entire assignment.
  * You can toggle between different assignment categories by clicking the tabs above.
  * Logout by clicking the button on top of the page.

## Technologies Used:

  * ReactJS and CSS (Flex Box and Media Queries).
  * [Task Manager API that we built](https://github.com/Amjad-H-Ali/General-Assembly-Task-Manager-API)

## API INFO

See corresponding API repo at https://github.com/Amjad-H-Ali/General-Assembly-Task-Manager-API

## User Stories & Wire Frames

1) User opens the app - they either register for a new account or login. Users are stored in a model. User Model consists of UserID, Password, Homework_id.

![alt text](https://i.imgur.com/iNGSYYD.png)

2) User is taken to the home page - by default they will see the "Homework" tab with a list of current assignments. Assignments are stored in a model. Assignment Model consists of AssignmentID, Name, Github_Link, Notes, Completed.

![alt text](https://i.imgur.com/Dn9IVRA.png)

3) When user clicks on assignment title, a modal opens showing the assignment details - users will have the option to mark the assignment as completed.

![alt text](https://i.imgur.com/0EmUbrM.png)

4) If user clicks "Edit", a modal opens that allows the user to make changes to the current assignment.

![alt text](https://i.imgur.com/lKffsCS.png)

5) If user clicks "New Assignment" a modal with a form will open where the user can add an assignment.

![alt text](https://i.imgur.com/zOv7wTl.png)