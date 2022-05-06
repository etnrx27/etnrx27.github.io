AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "RatVenture Game",
    cardImage: "assets/images/project-page/ratventure.png",
    description: "Final Assignment to build a game for 'Programming 1' Module Taken in NP Semester 1.",
    tagimg: "assets/images/project-page/ratventure.png",
    Githublink: "https://github.com/etnrx27/PRG1-Assignment",
  },
  {
    title: "Website for Raising Awareness on Dengue",
    cardImage: "assets/images/project-page/fed.png",
    description: "Final Assignment to build a website for 'Front-End Development' Module Taken in NP Semester 2.",
    tagimg: "assets/images/project-page/fed.png",
    Githublink: "https://github.com/etnrx27/FED-Assignment",
  },
  {
    title: "Hybrid Encryption with Pallier and Elgamal Cryptosystem Program",
    cardImage: "assets/images/project-page/ctg.png",
    description: "Final Assignment to build a program that mixes the Pallier and Elgamal Cryptosystem for 'Cryptography' Module Taken in NP Semester 2.",
    tagimg: "assets/images/project-page/ctg.png",
    Githublink: "https://github.com/etnrx27/CTG-Assignment",
  },
   {
    title: "Trace Together Token Program",
    cardImage: "assets/images/project-page/prg2.png",
    description: "Final Assignment to build a program for 'Programming 2' Module Taken in NP Semester 2.",
    tagimg: "assets/images/project-page/prg2.png",
    Githublink: "https://github.com/etnrx27/PRG2-Assignment",
  },
  {
    title: "Database Creation of a Company",
    cardImage: "assets/images/project-page/DB.png",
    description: "Final Assignment to build a prototype database for a fake company for 'Databases' Module Taken in NP Semester 2.",
    tagimg: "assets/images/project-page/DB.png",
    Githublink: "https://github.com/etnrx27/DB-Assignment",
  },
  {
    title: "Prototype Targetting Issues Faced in Education",
    cardImage: "assets/images/project-page/imp.png",
    description: "Final Assignment to build a prototype to help student's education for 'Innovation Made Possible' Module Taken in NP Semester 2.",
    tagimg: "assets/images/project-page/imp.png",
    Githublink: "https://github.com/etnrx27/IMP-Assignment",
  },
  {
    title: "Secure Creation of an E-commerce Website Prototype",
    cardImage: "assets/images/project-page/ssd.png",
    description: "Final Assignment to build a secure website prototype for 'Secure Software Development' Module Taken in NP Semester 3.",
    tagimg: "assets/images/project-page/ssd.png",
    Githublink: "https://github.com/etnrx27/SSD-Assignment",
  },
  {
    title: "Image Classification",
    cardImage: "assets/images/project-page/DL_1.png",
    description:
      "First Assignment to classify images for 'Deep Learning' Module Taken in NP Semester 3.",
    tagimg:"assets/images/project-page/DL_1.png",
    Githublink: "https://github.com/etnrx27/DL-Assignment-1",
  },
  {
    title: "Natural Language Processing",
    cardImage: "assets/images/project-page/DL_2.png",
    description: "Final Assignment to generate words and classify words for 'Deep Learning' Module Taken in NP Semester 3.",
    tagimg:"assets/images/project-page/DL_2.png",
    Githublink: "https://github.com/etnrx27/DL-Assignment-2",
  },
  {
    title: "Cloud Architecture",
    cardImage: "assets/images/project-page/CAT.png",
      description: "Final Assignment to develop a suitable cloud model for 'Cloud Architecture & Technologies' Module Taken in NP Semester 3.",
    tagimg: "assets/images/project-page/CAT.png",
    Githublink: "https://github.com/etnrx27/CAT-Assignment",
    },
  {
    title: "Digital Forensics",
    cardImage: "assets/images/project-page/DF.png",
    description: "Final Assignment to create and solve a case for 'Digital Forensics' Module Taken in NP Semester 4.",
    tagimg: "assets/images/project-page/DF.png",
    Githublink: "https://github.com/etnrx27/DF-Assignment",
  },
  {
    title: "Analysing Malwares",
    cardImage: "assets/images/project-page/MATT.png",
    description: "Final Assignment to perform malware analysis for 'Malware Analysis Tools & Technologies' Module Taken in NP Semester 4.",
    tagimg: "assets/images/project-page/MATT.png",
    Githublink: "https://github.com/etnrx27/MATT-Assignment",
  },
  {
    title: "Hardening Windows Operating System",
    cardImage: "assets/images/project-page/SCS_windows.png",
    description: "Final Assignment to harden the windows operating system for 'Server & Cloud Security' Module Taken in NP Semester 4.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/etnrx27/SCS-Assignment-1",
  },
  {
    title: "Hardening Linux Operating System",
    cardImage: "assets/images/project-page/SCS_linux.png",
    description: "Final Assignment to harden the linux operating system for 'Server & Cloud Security' Module Taken in NP Semester 4.",
    tagimg: "assets/images/project-page/SCS_linux.png",
    Githublink: "https://github.com/etnrx27/SCS-Assignment-2",
  },
    {
    title: "Penetration Testing Exercise",
    cardImage: "assets/images/project-page/WAPT.png",
    description: "Final Assignment to pentest a company's website for 'Web Application Pen-Testing' Module Taken in NP Semester 4.",
    tagimg:"assets/images/project-page/WAPT.png",
    Githublink: "https://github.com/etnrx27/WAPT-Assignment",
  },
  //{
  //  title: "Music Recommendation Engine",
  //  cardImage: "assets/images/project-page/music.jpg",
  //  description: "Built using Python.",
  //  tagimg:
  //    "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
  //  Previewlink: "",
  //  Githublink: "",
  //},
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  
                  <li><a target="_blank" href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
