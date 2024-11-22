/*
RATING_SCALES contains components that can be plugged into the questions attribute of the jsPsychSurveyLikert plugin.

 */
const SURVEY_LIKERT_RATING_SCALES = {
    required: true,

    Beauty: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding mooi',
                    name: 'beauty',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                };
            default:
                return {
                    prompt: 'I find this image beautiful',
                    name: 'beauty',
                    labels: ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    Liking: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding leuk',
                    name: 'liking',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                };
            default:
                return {
                    prompt: 'I like this image',
                    name: 'liking',
                    labels: ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    Pleasant: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding aangenaam',
                    name: 'pleasant',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                };
            default:
                return {
                    prompt: 'I find this image pleasant',
                    name: 'pleasant',
                    labels: ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    Interest: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding interessant',
                    name: 'interesting',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                };
            default:
                return {
                    'prompt': 'I find this image interesting',
                    'name': 'interesting',
                    'labels': ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    Order: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding ordelijk',
                    name: 'ordered',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                }
            case 'en':
                return {
                    prompt: 'I find this image ordered',
                    name: 'ordered',
                    labels: ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    Complex: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Ik vind deze afbeelding complex',
                    name: 'complex',
                    labels: ["sterk oneens", "oneens", "eerder oneens", "neutraal", "eerder eens", "eens", "sterk eens"],
                    required: this.required
                };
            default:
                return {
                    prompt: 'I find this image complex',
                    name: 'complex',
                    labels: ["strongly disagree", "disagree", "rather disagree", "neutral", "rather agree", "agree", "strongly agree"],
                    required: this.required
                }
        }
    },

    SimpleComplex: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe eenvoudig/complex vind je deze afbeelding?',
                    name: 'simple-complex',
                    labels: ['heel eenvoudig', 'eenvoudig', 'eerder eenvoudig', 'neutraal', 'eerder complex', 'complex', 'heel complex'],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How simple/complex do you find this image?',
                    name: 'simple-complex',
                    labels: ['very simple', 'simple', 'rather simple', 'neutral', 'rather complex', 'complex', 'very complex'],
                    required: this.required
                }
        }
    },

    ChaoticOrdered: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe chaotisch/geordend vind je deze afbeelding?',
                    name: 'chaotic-ordered',
                    labels: ['heel chaotisch', 'chaotisch', 'eerder chaotisch', 'neutraal', 'eerder geordend', 'geordend', 'heel geordend'],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How chaotic/ordered do you find this image?',
                    name: 'chaotic-ordered',
                    labels: ['very chaotic', 'chaotic', 'rather chaotic', 'neutral', 'rather ordered', 'ordered', 'very ordered'],
                    required: this.required
                }
        }
    },

    BadGoodComposition: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe slecht/goed vind je de compositie van deze afbeelding?',
                    name: 'bad-good-composition',
                    labels: ['heel slechte compositie', 'slechte compositie', 'eerder slechte compositie', 'neutraal', 'eerder goede compositie', 'goede compositie', 'heel goede compositie'],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How bad/good do you find the composition of this image?',
                    name: 'bad-good-composition',
                    labels: ['very bad composition', 'bad composition', 'rather bad composition', 'neutral', 'rather good composition', 'good composition', 'very good composition'],
                    required: this.required
                }
        }
    },

    WeakStrong: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe onduidelijk/duidelijk vind je de spatiale lay-out van deze afbeelding?',
                    name: 'weak-strong',
                    labels: ['heel onduidelijke', 'onduidelijke ', 'eerder onduidelijke ', 'neutraal', 'eerder duidelijke ', 'duidelijke ', 'heel duidelijke '],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How unclear/clear do you find the spatial layout of this image?',
                    name: 'weak-strong',
                    labels: ['very unclear', 'unclear ', 'rather unclear ', 'neutral', 'rather clear ', 'clear ', 'very clear '],
                    required: this.required
                }
        }
    },
    UnpleasantPleasant: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe onaangenaam/aangenaam vind je deze afbeelding?',
                    name: 'unpleasant-pleasant',
                    labels: ['heel onaangenaam', 'onaangenaam', 'eerder onaangenaam', 'neutraal', 'eerder aangenaam', 'aangenaam', 'heel aangenaam'],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How unpleasant/pleasant do you find this image?',
                    name: 'unpleasant-pleasant',
                    labels: ['very unpleasant', 'unpleasant', 'rather unpleasant', 'neutral', 'rather pleasant', 'pleasant', 'very pleasant'],
                    required: this.required
                }
        }
    },

    BoringInteresting: function () {
        switch (window.language) {
            case 'nl':
                return {
                    prompt: 'Hoe saai/interessant vind je deze afbeelding?',
                    name: 'boring-interesting',
                    labels: ['heel saai', 'saai', 'eerder saai', 'neutraal', 'eerder interessant', 'interessant', 'heel interessant'],
                    required: this.required
                }
            default:
                return {
                    prompt: 'How boring/interesting do you find this image?',
                    name: 'boring-interesting',
                    labels: ['very boring', 'boring', 'rather boring', 'neutral', 'rather interesting', 'interesting', 'very interesting'],
                    required: this.required
                }
        }
    },
}