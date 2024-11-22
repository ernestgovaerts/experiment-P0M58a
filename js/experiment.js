async function loadImages() {
  const response = await fetch("images.json");
  const imageData = await response.json();

  const naturalImages = imageData.natural;
  const manmadeImages = imageData.manmade;
  const allImages = naturalImages.concat(manmadeImages);
  return { naturalImages, manmadeImages, allImages };
}

loadImages().then(({ naturalImages, manmadeImages, allImages }) => {
  document.getElementById("start-button").addEventListener("click", () => {
    const selectedLanguage = document.getElementById("language-dropdown").value;
    window.language = selectedLanguage;
    document.getElementById("language-selector").style.display = "none";
    document.getElementById("experiment-container").style.display = "block";
    initializeExperiment(naturalImages, manmadeImages, allImages);
  });
});

function initializeExperiment(naturalImages, manmadeImages, allImages) {
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

  timeline.push({
    type: jsPsychPreload,
    images: allImages,
  });

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
  // timeline.push(informed_consent);


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
  // timeline.push(demographics);

  // -- Main experiment --
  // Function to get questions based on the given version and block
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
    // Shuffle the images for each block
    let shuffledImages = shuffleArray(allImages);
    timeline.push({
      // Display each image in the shuffled order
      timeline: shuffledImages.map((image) => ({
        type: jsPsychSurveyLikert,
        preamble: `<div style="text-align: center;"><img src="${image}" style="display: inline-block; max-width: 400px;"></div>`,
        questions: getQuestions(window.version, block),
        // Save the data for each image
        data: {
          block: block,
          image: image,
          category: image.includes("natural") ? "natural" : "manmade",
          version: window.version,
        },
      })),
    });

    // -- Questionaires --
  }

  jsPsych.run(timeline);
}
