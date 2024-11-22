async function loadImages() {
  const response = await fetch("images.json");
  const imageData = await response.json();

  const naturalImages = imageData.natural;
  const manmadeImages = imageData.manmade;
  const instructionImages = imageData.instructions;

  return { naturalImages, manmadeImages, instructionImages };
}

loadImages().then(({ naturalImages, manmadeImages, instructionImages }) => {
  document.getElementById("start-button").addEventListener("click", () => {
    // Get selected language
    const selectedLanguage = document.getElementById("language-dropdown").value;
    window.language = selectedLanguage;
    document.getElementById("language-selector").style.display = "none";
    document.getElementById("experiment-container").style.display = "block";
    initializeExperiment(naturalImages, manmadeImages, instructionImages);
  });
});


function initializeExperiment(naturalImages, manmadeImages, instructionImages) {
  var jsPsych = initJsPsych({
    use_webaudio: false,
    on_finish: function () {
      jsPsych.data.displayData();
    },
  });

  var subject_id = jsPsych.randomization.randomID(15);
  var condition_assignment = jsPsych.randomization.sampleWithoutReplacement(["V1", "V2"], 1)[0];
  window.version = condition_assignment;

  jsPsych.data.addProperties({
    subject: subject_id,
    condition: condition_assignment,
  });

  var timeline = [];

  // Preload images
  // !!! PRELOAD HERE !!!

  // Initial instructions
  var mainInstructions = {
    type: jsPsychInstructions,
    pages: [
      `<p>${window.language === 'en' ? "Welcome <br><br> In this experiment, you will be presented with images of natural and manmade objects. <br>" +
        "For each image, you will be asked to rate the image on a number of scales. <br>" +
        "Please rate each image as accurately as possible. <br><br>" +
        "At the end of the experiment, you will be asked to fill in a few short personality questionnaires. <br><br>" +
        "Please use a desktop or laptop computer to complete the experiment. <br> Do not reload the page or use the back button <br><br>" +
        "The whole experiment will take approximately 30 minutes. <br><br>" +
        "Thank you for participating in this experiment!"
        : "Welkom <br><br> In dit experiment worden beelden van natuurlijke scénes en door mensen gemaakte objecten gepresenteerd. <br>" +
        "Voor elk beeld wordt u gevraagd om het beeld op een aantal schalen te beoordelen. <br>" +
        "Beoordeel elk beeld zo nauwkeurig mogelijk. <br><br>" +
        "Aan het einde van het experiment wordt u gevraagd om een paar korte persoonlijkheidsvragenlijsten in te vullen. <br><br>" +
        "Gebruik een desktop- of laptopcomputer om het experiment uit te voeren. <br> Herlaad de pagina niet en gebruik de terugknop niet. <br><br>" +
        "Het hele experiment duurt ongeveer 30 minuten. <br><br>" +
        "Bedankt voor uw deelname aan dit experiment!"
      }</p>`
    ],
    button_label_next: window.language === 'en' ? "Next" : "Volgende",
    allow_backward: false,
    show_clickable_nav: true,
    css_classes: ["text-center", "mt-5"],
  };
  timeline.push(mainInstructions);

  // Informend consent
  var feedback_email_address;
  var informed_consent = {
    type: jsPsychExternalHtml,
    url: `informed_consent_${window.language}.html`,
    cont_btn: "accept_consent_button",
    on_finish: function (e) {
      e.feedback_email_address = feedback_email_address;
    },
    check_fn: function () {
      feedback_email_address = document.getElementById("feedback_email_address").value;
      return true;
    },
    force_refresh: true,
  };
  timeline.push(informed_consent);

  // -- Main experiment --
  // Function to present an instruction slide
  function createInstructionSlide(image, index, language) {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<div id="introductionSlideContainer" style="text-align: center;">
                  <img src="${image}" class="img-fluid">
                  <p>${window.language === 'en' ? "Press [space] to continue" : "Druk op [spatie] om verder te gaan"}</p>
                 </div>`,
      choices: [" "], // Press space to continue
    };
  }

  // Present instruction slides
  instructionImages[window.language].forEach((image, index) => {
    timeline.push(createInstructionSlide(image, index, window.language));
  });

  // Function to present questions based on the given version and block
  function getQuestions(version, block) {
    if (version === "V1") {
      return block === 1
        ? [SURVEY_LIKERT_RATING_SCALES.SimpleComplex(), SURVEY_LIKERT_RATING_SCALES.BadGoodComposition(), SURVEY_LIKERT_RATING_SCALES.UnpleasantPleasant()]
        : [SURVEY_LIKERT_RATING_SCALES.Order(), SURVEY_LIKERT_RATING_SCALES.SimpleComplex(), SURVEY_LIKERT_RATING_SCALES.BoringInteresting()];
    } else if (version === "V2") {
      return block === 1
        ? [SURVEY_LIKERT_RATING_SCALES.SimpleComplex(), SURVEY_LIKERT_RATING_SCALES.WeakStrong(), SURVEY_LIKERT_RATING_SCALES.UnpleasantPleasant()]
        : [SURVEY_LIKERT_RATING_SCALES.Order(), SURVEY_LIKERT_RATING_SCALES.WeakStrong(), SURVEY_LIKERT_RATING_SCALES.BoringInteresting()];
    }
  }

  // Function to shuffle an array
  function shuffleArray(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  for (let block = 1; block <= 2; block++) {
    // Select 15 random images from each category
    let blockNaturalImages = shuffleArray(naturalImages).slice(0, 15);
    let blockManmadeImages = shuffleArray(manmadeImages).slice(0, 15);

    // Combine and shuffle the block images
    let blockImages = shuffleArray(blockNaturalImages.concat(blockManmadeImages));

    timeline.push({
      timeline: blockImages.map((image) => ({
        type: jsPsychSurveyLikert,
        preamble: `<div style="text-align: center;"><img src="${image}" style="display: inline-block; max-width: 400px"></div>`,
        questions: getQuestions(window.version, block),
        button_label: `${window.language === 'en' ? "Next >" : "Volgende >"}`,
        data: {
          block: block,
          image: image,
          category: image.includes("natural") ? "natural" : "manmade",
          version: window.version,
        },
      })),
    });

    var betweenBlockBreak = {
      type: jsPsychInstructions,
      pages: [
        `<p class="mt-5">${window.language === 'en' ? `You have finished block ${block}/2.` : `Je hebt blok ${block}/2 voltooid.`} <br> ${window.language === 'en' ? "Click 'Continue' when you are ready to proceed with the experiment." : "Klik op 'Verdergaan' wanneer je klaar bent om verder te gaan met het experiment."}</p>`
      ],
      button_label_next: window.language === 'en' ? "Continue" : "Verdergaan",
      allow_backward: false,
      show_clickable_nav: true,
      css_classes: ["text-center"],
    };
    timeline.push(betweenBlockBreak);
  }


  // -- Questionaires --
  var demographics = {
    type: jsPsychSurvey,
    pages: [
      [
        DEMOGRAPHICS.Introduction(),
        DEMOGRAPHICS.Age(),
        DEMOGRAPHICS.NativeLanguage(),
        DEMOGRAPHICS.Nationality(),
        DEMOGRAPHICS.VisualImpairments(),
        DEMOGRAPHICS.Education(),
        DEMOGRAPHICS.Gender()
      ],
    ],
    button_label: "Continue",
  };
  timeline.push(demographics);

  jsPsych.run(timeline);
}
