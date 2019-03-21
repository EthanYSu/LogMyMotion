#LogMyMotion - Your Virtual Personal Trainer

##Team Members

Sam Kim - Team Lead

Nikhil Patil - Scribe

Eric Freilafert - Developer

Aryaman Das - Developer

Ethan Su - Developer

##Motivation 

Working out is daunting for many beginners because of uncertainity of whether or not you're doing the exercise correct and the fear of injury. Some choose to hire personal trainers but that is a serious time and financial commitment. Maintianing steady and consistent workout schedule is hard because of unexpected problems that may arise.

##Our Solution

LogMyMotion is allows you to perfect your workout at the privacy of your own home. Our application provides you with real-time audio and visual feedback while you are exercising. It gives you detailed analytics of which aspect of your form are good, and which ones need improvement, while logging all of your workouts so that you can see how you've improved over time.

##How It Works

###Analyzing Your Squat Form

1. **Squat Depth** - We make sure your squat is deep enough, where your hips are parallel with your knees at the bottom of the squat.
2. **Feet Width** - Your feet are about shoulder width.
3. **Shoulder Alignment** - Your shoulders are align with each other and you are not tilting while you're doing a repitition.
4. **Knee Angle** - Your knees are angled outwards while performing a repitition.

###Calibration Stage

We ensure that your starting position before you start doing a single rep. In order to calibrate, your feet have to be at the proper width and your shoulders have to be aligned.

###Exercise Stage

Now you could begin your workout and as you are squating, our analyzer will give you real time audio and feedback while your are exercising.

###Results Stage

To enter the Exercise phase, all you have to say is the work "Done" and we will provide you a breakdown of your set, which includes charts that show the breakdown of each cue, a video of the workout you've completed, and a summary table which shows each repetition graded. 

###Workout Calendar

The workout calendar records all previous worksouts you've done. Clicking on each workout will display the summary page for the corresponding workout.

###Dashboard

The dashboard contains 3 main sections, the challenges section, the breakout of your squat cues since you've been using the application, and a chart showing your set score for the previous 5 workouts. The challenges section is to motivate the user to continue using out application, the breakdown of your squat cues allows the user to track their progress overtime, and the chart containing your previous 5 set scores allows you to see if you're scores are trending downwards or upwards, indicating to either squat with less weight or to correct your form. 

##Technologies

Our application is built around the TensoflorJS library Posenet. We use React for our frontend and Firebase for logging in and storing and retrieving past workoutdata, and Google Cloud's Text-to-Speech to provide real-time audio feedback for the user. 

##Challenges


##Future Implementations
