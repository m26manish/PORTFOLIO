import React from 'react';

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About 👨🏽‍💻</h1>
          <p>
            Hello, I'm Manish, a passionate Web developer with a keen eye for the MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
          </p>
          <br />
          <h1 className="text-green-500 font-semibold text-xl">Education & Training</h1>
          <span>
            [B.TECH], [Dr. A.P.J Abdul Kalam University], [2021-25] [7.7 CGPA].<br />
            [INTERMEDIATE], [Sunbeam Suncity], [2020], [89.6].<br />
            [HIGH SCHOOL], [Central Hindu Boys School], [2018], [86.2].
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">Skills & Expertise</h1>
          <span>
            Proficient in C/C++, JavaScript, HTML5, and CSS5. Experienced with frameworks like React, Node.js, and Express.js. Strong grasp of design principles and concepts. Excellent problem-solving skills and effective communicator.
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">Professional Experience</h1>
          <span>
            Web Developer Intern, IBM SkillBuild, India, July 2024 – Aug 2024: Created a dynamic, responsive interface using React, improving user interaction and site responsiveness by 20%. Integrated external News APIs for real-time news delivery with latency under 2 seconds, increasing user retention by 25%.<br />
            Project: NEWZ-24x7 (MongoDB, Express, React, Node.js, Tailwind CSS), Jul 2024 – Oct 2024: Developed a responsive UI resulting in a 30% increase in user engagement, with backend processing supporting 1000 concurrent users.<br />
            Project: Event Management (MongoDB, Express, React, Node.js, Tailwind CSS), Oct 2023 – Mar 2024: Developed a responsive UI that streamlined navigation for over 1,000 unique users monthly, enhancing user satisfaction and retention by 15%.
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">Achievements & Awards</h1>
          <span>
            Ranked 271 on GFG among college peers, solving 220+ DSA problems. GFG LINK<br />
            Solved 130+ DSA problems on LeetCode. LEETCODE LINK<br />
            Secured 1986th rank in CodeVita Season 11 contest conducted by TCS.
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">Mission Statement</h1>
          <p>
            My mission is to leverage my skills and creativity to deliver innovative software solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

