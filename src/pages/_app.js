import "@/styles/globals.css";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";

// Activity Level Array. Defines the physical daily activity levels users can choose.
const activityLevels = [
    { label: "Sedentary (little or no exercise)", value: 1.2 },
    { label: "Lightly active (light exercise/sports 1-3 days/week)", value: 1.375 },
    { label: "Moderately active (moderate exercise/sports 3-5 days/week)", value: 1.55 },
    { label: "Very active (hard exercise/sports 6-7 days a week)", value: 1.725 },
    { label: "Athlete (intense exercise twice per day)", value: 1.9 },
];

// Height in Feet Array. Defines the height in feet users can select.
const heightFeetOptions = [
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
];

// Height in Inches Array. Defines the height in inches users can select
const heightInchesOptions = [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
];

function App() {
// Initializing state variables. Variables have initial value of "".
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [heightFeet, setHeightFeet] = useState("");
    const [heightInches, setHeightInches] = useState("");
// Activity level has initial value of the first element in activityLevel Array 
    const [activityLevel, setActivityLevel] = useState("");
    const [tdee, setTdee] = useState(null);

    const calculateTdee = () => {
        const weightInKg = weight * 0.453592; // Convert pounds to kg
        const heightInCm = (heightFeet * 30.48) + (heightInches * 2.54); // Convert feet and inches to cm

// Base Metabolic Rate
        const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
        const calculatedTdee = Math.floor(bmr * parseFloat(activityLevel));
        setTdee(calculatedTdee.toFixed(2));
    };

    return (
		<div>
			<Navbar/>
			<div className='flex flex-col mx-12 my-14 px-12 py-10 justify-center bg-navy-blue rounded-2xl'>
				<h1 className="text-center pb-2.5 text-3xl text-light-cream">Find Out How Many Calories You Burn Per Day!</h1>
				<p className="text-center leading-relaxed pb-2.5 text-lg text-light-cream"><strong>BurnRate</strong> is a tool to measure of how many calories you burn per day. Knowing your BurnRate helps you to stay on track toward meeting your heath goals!</p>
				<form onSubmit={(e) => {
					e.preventDefault();
					calculateTdee();
				}} className='flex flex-col items-center'>

					<input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Your Age ...' required />

					<input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='Enter Your Weight (lbs) ...' required />

					<select value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} required>
						<option value="">Select Feet</option>
						{heightFeetOptions.map((feet) => (
							<option key={feet.value} value={feet.value}>{feet.label}</option>
						))}
					</select>

					<select value={heightInches} onChange={(e) => setHeightInches(e.target.value)} required>
						<option value="">Select Inches</option>
						{heightInchesOptions.map((inches) => (
							<option key={inches.value} value={inches.value}>{inches.label}</option>
						))}
					</select>

					<select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required>
						<option value="">Select Activity Level</option>
						{activityLevels.map((level) => (
							<option key={level.value} value={level.value}>{level.label}</option>
						))}
					</select>

					<button className="bg-cream text-3xl p-2.5 rounded-2xl" type='submit'>Calculate </button>
				</form>
				<div className="flex flex-col items-center m-10 p-2.5 text-light-cream leading-relaxed text-3xl">
					{tdee && <h2 className="">Your BurnRate is {tdee} calories/day.</h2>}
					{tdee && <h2 className="">To gain weight you must eat {parseFloat(tdee) + 500} calories/day.</h2>}
					{tdee && <h2 className="">To lose weight you must eat {tdee - 500} calories/day.</h2>}
				</div>
			</div>
		</div>
    );
}

export default App;